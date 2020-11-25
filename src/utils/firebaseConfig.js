import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCFqPYMPrrtlBlO0rKjSKvRAYFqL9JKZLs",
    /*authDomain: "todofirebase-dd40e.firebaseapp.com",*/
    databaseURL: "https://todofirebase-dd40e.firebaseio.com",
   /* projectId: "todofirebase-dd40e",
    storageBucket: "todofirebase-dd40e.appspot.com",
    messagingSenderId: "918323339821",
    appId: "1:918323339821:web:a3d49b75b4ce7667304ea4"*/
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;