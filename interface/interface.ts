interface testUser{
    name:string;
    isPaid?:boolean;//optionsal
    checkpaid(name:string):boolean;
    checkCourse:(test:string)=>string;
}

let testingUser:testUser;
testingUser={
    name:"sriram",
    checkpaid: function(name:string){return true},
    checkCourse:(name:string)=>{
        return "course name"
    }
}