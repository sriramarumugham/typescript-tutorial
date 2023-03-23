var Course = /** @class */ (function () {
    function Course(couseCount, name) {
        this.couseCount = couseCount;
        this.name = name;
        this.courseCount = 1;
    }
    Course.prototype.delteToken = function () {
        console.log("tokendeleted");
    };
    return Course;
}());
var newCouse = new Course(1, "sriram");
console.log(newCouse);
// class User{
//     public name:string;
//     private email:string;
//     readonly city:string="coimbatore"
//     constructor( name:string , email:string){
//         this.email=email;
//         this.name=name;
//     }
// }
