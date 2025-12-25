// Example of basic conditionals in JavaScript
let age = 17;
if (age >= 18) {
  console.log("You are an adult.");
}else {
  console.log("You are a minor.");
}
// console.log(typeof age);
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}