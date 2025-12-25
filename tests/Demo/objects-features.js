//object Basic Features

let user = {
    userName: "rakesh",
    password: "rakesh123",
    age: 25,
    isAdmin: false
};
console.log(user.userName); // Accessing property using dot notation
console.log(user["password"]); // Accessing property using bracket notation

// Modifying properties
user.age = 26;
user["isAdmin"] = true;
console.log(user.age);

// Adding new properties
user.email = "rakesh.trianz@outlook.com";
user["phone"] = "999-923-4313";
console.log(user.email);
console.log(user.phone);

console.log("< < < < < < < < > > > > > > > > >");
//object with functions
let cal = {
    add: function(x, y) { return x + y; },
    sub: function(x, y) { return x - y; },
    mul: (x, y) => x * y
};
console.log(cal.add(5, 10));
console.log(cal.sub(5, 10));
console.log(cal.mul(5, 10));

console.log("= = = = = = = = = = = = = = = = =");

//object with this keyword
let calculator = {
    read: function(a, b) {
        this.a = a;
        this.b = b;
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }
};
calculator.read(5, 10);
console.log(calculator.sum());
console.log(calculator.mul());

console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");

//Object in Arrays
let users = [
    { name: "Rakesh", age: 39 },
]
console.log(users[0].name);
console.log(users[0].age);