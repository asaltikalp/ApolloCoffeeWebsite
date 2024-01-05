import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app);

document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault(); // Formun normal gönderilme işlemini engeller.

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Kullanıcı kaydı başarılı
            console.log("User created:", userCredential);

            const signupType = document.querySelector('input[name="signupType"]:checked').value;
            // Burada ek kullanıcı bilgilerini veritabanına kaydedebilirsiniz

            if (signupType === 'Staff') {
                window.location.href = 'addcoffeetype.html'; // Staff için sayfa
            } else if (signupType === 'Customer') {
                window.location.href = 'order.html'; // Customer için sayfa
            }
        })
        .catch(error => {
            console.error("Signup error:", error);
            
            const errorMessageElement = document.getElementById('error-message');
            if (errorMessageElement) {
                errorMessageElement.innerText = "Signup failed: \n" + error.message;
                errorMessageElement.style.display = 'block';
            }

        });
});