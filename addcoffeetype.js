
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

document.getElementById('addCoffee').addEventListener('click', function(event) {
    event.preventDefault();

    const coffeeName = document.getElementById('coffeeName').value;
    const coffeeDescription = document.getElementById('coffeeDescription').value;
    const coffeePrice = document.getElementById('coffeePrice').value;

    const coffeeData = { coffeeName, coffeeDescription, coffeePrice };
    
    addDoc(collection(db, "coffees"), coffeeData)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
            // Burada kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
            // Örneğin: window.location.href = 'order.html';
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });
});

