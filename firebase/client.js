import { getApp, initializeApp } from "firebase/app"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Persistence } from "firebase/auth"
import { firebase_client_config } from "/secrets/firebase_config";
import * as firebase from 'firebase/app';




let app;
try {
	app = getApp('client');
} catch (error) {
	app = initializeApp(firebase_client_config, 'client')	
}
export const auth = getAuth(app);
export const db = getFirestore(app);

// auth().setPersistence(auth.Auth.Persistence.NONE);





export const signUp = async (email, password) => {

	let new_user;

	try {
		await createUserWithEmailAndPassword(auth, email, password).then( (createdUser) => {

			console.log('createdUser', createdUser);

			new_user = create_user({
				uid: createdUser.user.uid,
				display_name: createdUser.user.displayName,
				email: createdUser.user.email
			})
	
		})
		
	} catch (error) {
		console.log('signUp error', error);
	}

	return new_user;
}

export const loginWithEmailAndPassword = (email, password) => 
{
	return signInWithEmailAndPassword(auth, email, password);
}

export const create_user = ({uid, email, display_name}) => 
{    
	return addDoc(collection(db, 'users'), {
		uid, 
		email,
		display_name
	});
}

export const getUserTokenId = async () => {

	let userTokenId = null;
	
	try {
		userTokenId = auth.currentUser.getIdToken(true);
	} catch (error) {}

	return userTokenId;

}