abstract class user{
    constructor(
        public camera:string, 
        public fileter:string,
    ){

    }
}

class Instagram extends user{

}

let subUser=new Instagram("camera" , "fileter");

export{}