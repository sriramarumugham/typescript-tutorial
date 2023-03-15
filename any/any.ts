var hero;
//default ts take it as any
function getme() {
  return "thor";
}

hero = getme(); //"thor"
hero = 123; // accepts the number is inconsistent
hero=true;
hero={};
hero=[];

//not a best practice to use any , creates inconsisteny in type 

export{};