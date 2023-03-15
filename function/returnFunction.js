"use strict";
exports.__esModule = true;
function addTwo(num) {
    //it has to return a number not string
    return "hello";
}
var num = addTwo(2);
//imporved
function addOne(num) {
    //adding : number at the fucntion check the return type
    return num + 1;
}
var num1 = addOne(1);
//void return type
function consoleErro(msg) {
    console.log(msg);
}
//never return a value it throws or crash a function stops the program
function handleError(msg) {
    throw new Error(msg);
}
