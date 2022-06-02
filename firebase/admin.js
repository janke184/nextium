const { initializeApp, getApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore, CollectionReference } = require('firebase-admin/firestore');
import admin from 'firebase-admin';
import { firebase_admin_config } from '/secrets/firebase_config.js'



let app;
try {
    app = getApp('admin');
} catch (error) {
    app = initializeApp({
		credential: admin.credential.cert(firebase_admin_config)
	}, 'admin')
	
}
const auth = getAuth(app);
const db = getFirestore(app);

export const getUIDByUserTokenId = async (tokenId) => {

	let uid = null;

	try {
		uid = await auth.verifyIdToken(tokenId);
	} catch (error) {
		console.log('error getting uid', error)
		console.log('error code', error.errorInfo.code)
	}

	return Promise.resolve(uid)	
	
}

export const getUserTokenIdFromRequest = (req) => {

	let userTokenId = null;

	try {
		userTokenId = req.body.userTokenId
	} catch (error) {}

	return userTokenId;
}

export const getUIDByRequest = async (req) => {

	const userTokenId = getUserTokenIdFromRequest(req);
	let uid = null

	if(userTokenId){

		uid = await getUIDByUserTokenId(userTokenId)

	}

	return Promise.resolve(uid)

}

export const getUserFromDbByUID = async (uid) => {
	
	const usersRef = db.collection('users')
	const snapshot = await usersRef.where('uid', '==', uid).get();

	if (snapshot.empty) {		
		return Promise.resolve();
	}

	let user;
	snapshot.forEach(doc => {
		user = {
			docId: doc.id, 
			...doc.data()
		}
		
	});

	return Promise.resolve(user)
}

export const getUserFromFirebaseAuthByUID = async (uid) => {
	
	let user = null;
	try {
		user = await auth.getUser(uid)
	} catch (error) {}

	return Promise.resolve(user)
}

export const createDocument = async (collection, data) => {

	const colRef = db.collection(collection);

	const newDoc = await colRef.add(data)

	return Promise.resolve(newDoc)
}

export const updateDocument = (collection, originalDoc, newData) => {

}
