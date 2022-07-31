const salesOrders = [{ 'id': 'S1', 'created': '2020-01-02', 'quantity': 6 }, { 'id': 'S2', 'created': '2020-11-05', 'quantity': 2 }, { 'id': 'S3', 'created': '2019-12-04', 'quantity': 3 }, { 'id': 'S4', 'created': '2020-01-20', 'quantity': 2 }, { 'id': 'S5', 'created': '2019-12-15', 'quantity': 9 }];



const purchaseOrders = [{
'id': 'P1', 'receiving': '2020-01-04', 'quantity': 4 }, { 'id': 'P2', 'receiving': '2020-01-05', 'quantity': 3 }, { 'id': 'P3', 'receiving': '2020-02-01', 'quantity': 5 }, { 'id': 'P4', 'receiving': '2020-03-05', 'quantity': 1 }, { 'id': 'P5', 'receiving': '2020-02-20', 'quantity': 7 }];



// store empty values to make a push on the next for each

let createdOrderId = []
let createdOrderDate = []
let createdOrderQuantity = []

salesOrders.forEach(function (str) {

    // search every value on array and added to a new one for every item (Id, Date, Quantity)

    createdOrderId.push(str.id);
    createdOrderDate.push(str.created);
    createdOrderQuantity.push(str.quantity);


});

// store empty values to make a push on the next for each

let recieveOrderId = []
let recieveOrderDate = []
let recieveOrderQuantity = []

purchaseOrders.forEach(function (str) {

    // search every value on array and added to a new one for every item (Id, Date, Quantity)


    recieveOrderId.push(str.id);
    recieveOrderDate.push(str.receiving);
    recieveOrderQuantity.push(str.quantity);

});


// First we made a compare from quantity
if (createdOrderQuantity >= recieveOrderQuantity) {

    console.log("we have stock")

    // if we have stock, then will gonna made a search of dates. If they are equal o greater then we have the ok to deliver the product

    if (recieveOrderDate >= createdOrderDate) {
        console.log("Client will receive the order")
    } else {
        console.log("Client will not receive the order")
    }
}

else {
    console.log("we do not have stock")
}
