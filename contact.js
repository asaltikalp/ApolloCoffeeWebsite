
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDtUnJPFY88Ip58u-KVzCtiRQdQuzSJN5Q",
    authDomain: "coffeshop-e652c.firebaseapp.com",
    projectId: "coffeshop-e652c",
    storageBucket: "coffeshop-e652c.appspot.com",
    messagingSenderId: "828524047878",
    appId: "1:828524047878:web:d5a7535f91ac7efa9e9d87",
    measurementId: "G-T0VYCXFG2Y"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('sendMessage').addEventListener('click', function(event) {
    event.preventDefault();

    const UserName = document.getElementById('UserName').value;
    const UserEmail = document.getElementById('UserEmail').value;
    const UserMessage = document.getElementById('UserMessage').value;

    const messageData = { UserName, UserEmail, UserMessage };
    
    addDoc(collection(db, "User Messages"), messageData)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            window.location.href = 'order.html';
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });
});

