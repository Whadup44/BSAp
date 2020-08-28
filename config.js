import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC86_24QfhKbIHEbWY_ayk0G3YKcjAj6LM",
    authDomain: "bsap-3d708.firebaseapp.com",
    databaseURL: "https://bsap-3d708.firebaseio.com",
    projectId: "bsap-3d708",
    storageBucket: "bsap-3d708.appspot.com",
    messagingSenderId: "1064924615181",
    appId: "1:1064924615181:web:befc8ff4f90a036253bb44"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();