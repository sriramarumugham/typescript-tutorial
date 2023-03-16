// myUnion is a great on in typeScript
// it might be a number or it might be a string
// insted of any 
// you can use the union  ;
var score = 33;
score = 44;
score = "passed";
score = true;
var sriram = { name: "sriram", id: 335 };
sriram = { useName: "adminname", id: 223 };
function getDbId(id) {
    //checks the two tyeps for oen id
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 1;
    }
}
getDbId(1);
getDbId("2");
var theaterBooking;
// theaterBooking="ac box"; throws an  error, we can specify the types  of the varibale ;
