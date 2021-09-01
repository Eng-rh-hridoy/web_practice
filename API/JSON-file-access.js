// JSON
// JavaScript Object Notation

const person = {
    id: 247,
    name: "Black Flag",
    friends: ["Green Flag", "Red Flag", 'Blue Flag']
}
console.log(person);

// convertion of js Object to JSON
const send = JSON.stringify(person);
console.log(send);

// convertion of JSON data to js Object
const get = JSON.parse(send);
console.log(get);
/////////////////////////////////////

// access json File
const data = require("./friends-data.json");
console.log(data);

console.log(data.friends[0].name);
console.log(data.friends[0].age);

console.log(data.friends[1].name);
console.log(data.friends[1].id);

// delete
console.log(delete data.friends[1].id);
console.log(data);
