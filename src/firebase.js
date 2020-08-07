import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4Q0u1WHZR1BsqpSRLjMp0jVAaDjtrhQ0",
    authDomain: "tik-tok-clone-2ca6c.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-2ca6c.firebaseio.com",
    projectId: "tik-tok-clone-2ca6c",
    storageBucket: "tik-tok-clone-2ca6c.appspot.com",
    messagingSenderId: "70371257472",
    appId: "1:70371257472:web:2ac48f258db2465deb8a65",
    measurementId: "G-EVND1CV7G8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore() ;

  export default db ;