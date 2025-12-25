//function - declarations - scope - global

let language = "JavaScript";

function showLang(){
    console.log(language);
}
showLang(); // Output: JavaScript

console.log("< < < < < < < < > > > > > > > > >");
//function - declarations - scope - local
function test(){
    let localVariable = "local variable";
    console.log(localVariable); // Output: local variable
}
test(); // Output: local variable
console.log(localVariable); // ReferenceError: localVariable is not defined

console.log("= = = = = = = = = = = = = = = = =");

if (true){
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // ReferenceError: x is not defined


console.log("* * * * * * * * * * * * *  * * *");

