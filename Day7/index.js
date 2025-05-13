let user = new Object();

user = {
    name: "John",
    age: 30,
    weight: 60,
    height:1.75
}

user.name = "Jane";

user.gender = "Female";
user.isMale = false;
console.log(user);

delete user.age;

console.log(user.BMI === undefined);

console.log("BMI" in user) ;

let classes ={
    id:101,
    name:"Math",
    teacher:"Mr. Smith",
    topics:["Algebra", "Geometry", "Calculus"],
}

let profile = Object.assign({}, user, classes);

console.log(profile);


const person = {};
const propertyName = "username";
const value = "JohnDoe";

person[propertyName] = value;
console.log(person); 


const key = 'status';
const user1 = {
    name: 'Alice',
    age: 25,
    [key]: 'active'
    [user1]
}