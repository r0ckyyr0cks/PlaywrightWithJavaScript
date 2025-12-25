
//Async/Await Example
async function getData() {
    let response = await fetch("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    let data = await response.json();
    console.log(data);
}
getData();

//Now putting it together
async function getUser() {
    console.log("Fetching user data...");
    return new Promise((resolve) => {
        setTimeout(() => {resolve({ name: "Rakesh Ranjan", role: "Engineer" });}, 5000);
    });
}

async function displayUser() {
    let user = await getUser();
    console.log('User: ${user.name}, Role: ${user.role}');
}
displayUser();