let users = ["John", "Jane", "Doe"];
let userT2=["Smith", "Alice", "Bob"];
let num = users.length;
console.log(num); 


//append an item
users.push("Smith");


//add an item to the beginning
users.unshift("Alice");


//remove an item from the end
users.pop();

//remove an item from the beginning
users.shift();

//removing/replacing existing elemens with  new ones
// users.splice(4)
// users.splice(1, 1, "Bob", "Charlie");

//fill entire colum with john smith
users.fill("John Smith");

//selects a specific pirtion of the array
const recruits = users.slice(1, 3);

console.log(recruits);
 
//concatenates two arrays
const selected = users.concat(userT2);
console.log(selected);

//sorts an array alphabetically
users.sort();

//sorts an array in reverse order
users.reverse();

let ages = [25, 30, 35, 40, 45];
//get ages divisible by 2
const num1=ages.filter((i) => i% 2 == 0);
console.log(num1);
// console.log(users);


//Returns array elements with their index
const map1 = users.map((i,j)=> 
    console.log(`${i} is at index ${j}`));

console.log(map1);





