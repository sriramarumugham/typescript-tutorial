function addTwo(num: number) {
  //it has to return a number not string
  return "hello";
}
let num = addTwo(2);

//imporved
function addOne(num: number): number {
  //adding : number at the fucntion check the return type
  return num + 1;
}
let num1 = addOne(1);

//void return type
function consoleErro(msg: string): void {
  console.log(msg);
}

//never return a value it throws or crash a function stops the program

function handleError(msg: string): never {
  throw new Error(msg);
}
export {};
