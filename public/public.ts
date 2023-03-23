// class User{
//     public name:string;
//     private email:string;
//     readonly city:string="coimbatore"
//     constructor( name:string , email:string){
//         this.email=email;
//         this.name=name;
//     }
// }


class User{
    readonly city:"coimbatore"| "chennai"; 
    constructor(public name:string, public email:string , private useId:string){

    }
}