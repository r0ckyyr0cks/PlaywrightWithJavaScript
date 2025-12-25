/* 
    The Event Loop Basics
    Callbacks
    Promises
    Async/Await
    How this knowledge maps directly into Playwright automation
*/
//Even Loop Basics
console.log("Start of Script");

setTimeout(() => {
    console.log("Inside setTimeout callback");
}, 5000); // 5 seconds delay

console.log("End of Script");

console.log("= = = = = = = = = = = = = = = = =");
// Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully");
    }, 5000);
}

fetchData((data) => {
    console.log(data);
});

// Promises - Pending, Resolved, Rejected

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 5000);
})

promise.then(result => console.log(result))
