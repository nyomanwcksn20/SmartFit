import Firebase from 'firebase';


let firebaseConfig = {
    apiKey: "AIzaSyAn4j7OctMlg9V_ng2h1xohbC7CjOAHN08",
    authDomain: "smartfit-08.firebaseapp.com",
    databaseURL: "https://smartfit-08-default-rtdb.firebaseio.com",
    projectId: "smartfit-08",
    storageBucket: "smartfit-08.appspot.com",
    messagingSenderId: "128499307367",
    appId: "1:128499307367:web:cc5ba9638eb0627ac2d5c2",
    measurementId: "G-XNZQ22M1KF"
  };

  // Initialize Firebase
  export const app = Firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  // app initial untuk pemanggilan db