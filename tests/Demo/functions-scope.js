//function - declarations - scope

function testFunctionScope() {
    var localVar = "I'm local variable";
    return localVar;
}
console.log(testFunctionScope()); // Output: I'm local variable

console.log("< < < < < < < < > > > > > > > > >");

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Neha")); // Output: Hello, Neha!
console.log("end of while loop");

console.log("= = = = = = = = = = = = = = = =");

function add(a, b) {
    return a + b;
}
console.log("Sum is:", add(5, 10)); // Output: Sum: 15

console.log("* * * * * * * * * * * * *  * * *");

const multiply = (x,y) => (x*y);
console.log("Product is:", multiply(4, 6)); // Output: Product: 24