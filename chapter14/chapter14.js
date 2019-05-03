document.getElementById("placeOrder").addEventListener("click", placeOrder);

function placeOrder() {
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;
    var orderPrice = calcultePrice(numPizzas, typePizza);
    var deliveryPrice = calculateDelivery(orderPrice, delivery, birthday);
    var theOutput = "< p > Thank you for your order </p>";


    if (deliveryPrice === 0) {
        theOutPut += "<p>You get free delivery!</p>";
        document.getElementById("displayTotal").innerHTML = theOutput;
    }

    function calculatePrice(numPizzas, typePizza) {
        var orderPrice = Number(numPizzas) * 18;
        var extraCharge = 0;
        if (typePizza === "supreme") {
            extraChange = Number(numPizzas) * 2;
        }
    }
    orderPrice += extraCharge;
    return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;
    if (((deliveryCity === "Anytown") && (orderPrice > 10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else { deliveryPrice = 5; }
    return deliveryPrice;
}