//Pending - Work in progress (Order being prepared)
//Fulfilled - Order ready for pickup
//Rejected - Order cancelled

const apiPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Change the comment below to test different states
        resolve("Order is ready for pickup!");
        reject("Order has been cancelled.");
    }, 2000)
});

apiPromise.then((message) => {
    // Handle fulfilled state
        console.log("Fulfilled: " + message);
})
.catch((error) => {
    // Handle rejected state
        console.log("Rejected: " + error);
});