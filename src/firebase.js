import firebase from 'firebase/app';
import 'firebase/firestore';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCJ-Pq9UsNZVF3Y5IJ6sH1tJu7McpPnpgM",
    authDomain: "musa-e80cf.firebaseapp.com",
    projectId: "musa-e80cf",
    storageBucket: "musa-e80cf.appspot.com",
    messagingSenderId: "451246369015",
    appId: "1:451246369015:web:7dc54c3a6d3a75cc5fcbf2",
    measurementId: "G-63NJDQECLX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


export default firebase;
