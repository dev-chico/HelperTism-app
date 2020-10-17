import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyB8m0DjM5mhGSHgdniNgf3j6pKfXztMqDk",
  authDomain: "projeto-ama-4acab.firebaseapp.com",
  databaseURL: "https://projeto-ama-4acab.firebaseio.com",
  projectId: "projeto-ama-4acab",
  storageBucket: "projeto-ama-4acab.appspot.com",
  messagingSenderId: "989758503882",
  appId: "1:989758503882:web:580e0e540171ea01be6d33",
  measurementId: "G-9FMLCNQRWW"
  };

 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
 }

 export default firebase;