class Course {
    private couseCount:number=1;
  constructor(public email: string, public name: string){};
  private deleteToken(){
    console.log("token deleted");
  }
  get ApppleId():string{
    return "AppleId";
  }
  set updatecouseCount(couseNum){
    this.couseCount=10;
  }
}
const newCouse=new Course("eamil" , "name");
console.log(newCouse.updatecouseCount(1));
