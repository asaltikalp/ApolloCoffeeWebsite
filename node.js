const express = require('express');
const app = express();
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

admin.initializeApp({
  // Firebase Admin SDK yapılandırması
});

app.use(bodyParser.json());

app.post('/saveOrder', (req, res) => {
  const orderDetails = req.body;
  // Firebase Firestore'a sipariş kaydet
  admin.firestore().collection('orders').add(orderDetails)
    .then(docRef => {
      res.status(200).send(`Order saved with ID: ${docRef.id}`);
    })
    .catch(error => {
      res.status(500).send(`Error adding order: ${error}`);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
