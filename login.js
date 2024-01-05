import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app); // 'auth' nesnesi tanımlandı

document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Giriş başarılı
            console.log("Login successful:", userCredential);
            // Burada giriş sonrası işlemleri yapabilirsiniz, örneğin anasayfaya yönlendirme
            var loginType = document.querySelector('input[name="loginType"]:checked').value;

            if (loginType === 'Staff') {
                window.location.href = 'addcoffeetype.html'; // Administrator için sayfa
            } else if (loginType === 'Customer') {
                window.location.href = 'order.html'; // Kahve Sever için sayfa
            }
        })
        .catch((error) => {
            console.error("Login error:", error);
            // Kullanıcıya hata mesajını göster
            const errorMessageDiv = document.getElementById('loginErrorMessage');
            errorMessageDiv.innerText = "Login failed: \n" + error.message;
            errorMessageDiv.style.display = 'block'; // Hata mesajını görünür yap
         });

});

