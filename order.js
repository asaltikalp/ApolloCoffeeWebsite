
function changeQuantity(coffeeType, change) {
    var quantityElement = document.getElementById(coffeeType + '-quantity');
    var currentQuantity = parseInt(quantityElement.innerText);
    var newQuantity = currentQuantity + change;

    if (newQuantity < 0) {
        newQuantity = 0;
    }

    quantityElement.innerText = newQuantity;
}

document.getElementById('place-order-btn').addEventListener('click', function() {
    var coffeeTypes = ['latte', 'espresso', 'americano', 'cappuccino', 'filterCoffe', 'flatwhite', 'frappuccino', 'macchiato', 'mocha', 'brownie', 'cheesecake', 'cake']; // Buraya diğer kahve türlerini de ekleyebilirsiniz.
    var orderSummary = 'Your Order Summary:\n';
    var isEmptyOrder = true;

    coffeeTypes.forEach(function(coffeeType) {
        var quantity = document.getElementById(coffeeType + '-quantity').innerText;
        var coffeeSize = document.getElementById(coffeeType + '-size') ? document.getElementById(coffeeType + '-size').value : 'default';

        if (parseInt(quantity) > 0) {
            orderSummary += coffeeType.charAt(0).toUpperCase() + coffeeType.slice(1) + ' (' + coffeeSize + '): ' + quantity + '\n';
            isEmptyOrder = false;
        }
    });

    if (isEmptyOrder) {
        orderSummary = 'No items selected.';
    }
    document.getElementById('order-summary').innerText = orderSummary;
});


// Siparişleri Gösterme
function showOrders(db) {
    var db = firebase.firestore();
    db.collection("orders").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            // Burada sipariş bilgilerini göstermek için gerekli işlemleri yapabilirsiniz
        });
    });
}

// Sayfa Yüklendiğinde Siparişleri Göster
document.addEventListener('DOMContentLoaded', function() {
    var db = firebase.firestore();
    showOrders(db);
});

