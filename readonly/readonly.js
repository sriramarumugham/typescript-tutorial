"use strict";
exports.__esModule = true;
var user = { name: "", _id: "1" }; //it doesnt throw error for debit detials since its optional
user.name = "hello";
// type mycard=cardDate & cardNumber & cvvnum;  can only use two in and
var debitCard = { cardnum: "123", cardDate: "123", cvv: 1 };
