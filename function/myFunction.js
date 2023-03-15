"use strict";

exports.__esModule = true;

function addTwo(num) {
    //num is taken as any 
    num.toUpperCase(); //takes it as string
    return num + 2;
}
//number
addTwo(2);
//string
addTwo("5");

function addOne(num) {
    //num is taken as any 
    // num.toUpperCase();//takes it as string
    return num + 2;
}
addOne(1);

// addOne("1");//erro throws
var loginUser = function (name, email, paid) {
    //when you dont pass paid 
    if (paid === void 0) { paid = false; }
};
loginUser("h", "a");
