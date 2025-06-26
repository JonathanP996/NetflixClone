// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Await } from "react-router-dom";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBayL1OpKFIGKydxxy7lCE8Ow5klTDZpok",
  authDomain: "netflix-clone-f4eb0.firebaseapp.com",
  projectId: "netflix-clone-f4eb0",
  storageBucket: "netflix-clone-f4eb0.firebasestorage.app",
  messagingSenderId: "814152919356",
  appId: "1:814152919356:web:892c4788612de2be945639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signUp = async (name, email, password)=>{
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "user"), {
                uid: user.uid,
                name,
                authProvider: "local",
                email,
            })
        } catch (error) {
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
        }
}

const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const logout = () => {
    signOut(auth);
}

export {auth, db, signIn, signUp, logout};