type User = {
  name: string;
  readonly _id: string;
  debitDetails?: number;
};
let user: User = { name: "", _id: "1" }; //it doesnt throw error for debit detials since its optional
user.name = "hello";
// user._id="1" ; throws error you cannot chage read only after creation ;

type cardNumber={
    cardnum:string;
}
type cardDate={
    cardDate:string;
}
type cvvnum={
    cvv:number;
}
type mycard=cardDate & cardNumber & {cvv:number}
// type mycard=cardDate & cardNumber & cvvnum;  can only use two in and


let debitCard: mycard={cardnum:"123"  , cardDate:"123"  , cvv:1};

export {};
