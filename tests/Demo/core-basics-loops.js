//loops - for, while, do-while

for (let i = 0; i < 5; i++) {
  console.log("for loop iteration:", i);
}
console.log("end of for loop");
console.log("<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>");
let fruits = ['apple','pineapple','guava','litchi','Butter Fruit','Jamun','Mango'];
for (let f of fruits) {
    console.log("fruit:", f);
    }
console.log("Number of:", fruits.length);

let count = 1;
while (count <= 5) {
  console.log("while loop count:", count);
  count++;
}