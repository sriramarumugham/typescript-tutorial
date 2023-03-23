class User{
 private _courseCount=1;
 protected _protectedCouseCount=1;
}
class SubUser extends User{
    changeCouser(){
        this._protectedCouseCount=1;
        //cant change since its priavate
        // this._courseCount 
    }
}
export{}