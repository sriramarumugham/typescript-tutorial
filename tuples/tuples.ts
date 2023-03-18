//use cases
//kind of a specilized arry with restriciotns

const user: (string | number)[] = ["hc", 1];
const user1: (string | number)[] = [9, 1, "hc", 1];

//struturies the array;
//convert it into tuples

const user3: [string, number, boolean] = ["string", 1, true];

//thorws errors when the structure of the array changes
// const user4:[string, number, boolean]=[1, true, "string"];

let rgb: [number, number, number] = [233, 123, 233];

type tupleTest = [number, string];

// let newUser: tupleTest=[true, 1]; thorws error
let something: tupleTest = [1, "1"];

let newThing: tupleTest;

newThing = [1, "1"];

console.log(newThing);


//tuples stuck here you can use push pull pop and split in the tuples to change the resriction ;

//here we have added a  new element to the arrary 
newThing.push(newThing.length-1);
//removed the last one
newThing.pop();

//changes the structure of the tuples
