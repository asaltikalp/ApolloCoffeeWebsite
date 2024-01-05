import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtUnJPFY88Ip58u-KVzCtiRQdQuzSJN5Q",
    authDomain: "coffeshop-e652c.firebaseapp.com",
    projectId: "coffeshop-e652c",
    storageBucket: "coffeshop-e652c.appspot.com",
    messagingSenderId: "828524047878",
    appId: "1:828524047878:web:d5a7535f91ac7efa9e9d87",
    measurementId: "G-T0VYCXFG2Y"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Login sayfasının URL'si
});

document.getElementById('signupButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const signupType = document.querySelector('input[name="signupType"]:checked').value;
    //event.preventDefault(); // Formun normal gönderilme işlemini engeller.

    const userData = { email, password, signupType };

    saveUserToFirebase(userData)
        // Kullanıcının seçtiği tip'e göre farklı sayfalara yönlendirme
        if (signupType === 'Staff') {
            window.location.href = 'addcoffeetype.html'; // Administrator için sayfa
        } else if (signupType === 'Customer') {
            window.location.href = 'order.html'; // Kahve Sever için sayfa
        }
    }).catch(error => {
        console.error("Signup error:", error);
        // Hata işleme kodları burada
    });


function saveUserToFirebase(userData) {
    return addDoc(collection(db, "users"), userData);
}
