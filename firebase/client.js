import { getApps, initializeApp, apps} from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDhgz4qJTaKp7OViJS-CDbMlks1ZhWEBEw",
    authDomain: "react-crm-4a6c5.firebaseapp.com",
    projectId: "react-crm-4a6c5",
    storageBucket: "react-crm-4a6c5.appspot.com",
    messagingSenderId: "526117425361",
    appId: "1:526117425361:web:3a27674a1ec908771bb5f0",
    measurementId: "G-BRRTTV8VLN"
};

getApps().length==0 && initializeApp(firebaseConfig)

export const auth = getAuth();

export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const loginWithEmailAndPassword = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
}

