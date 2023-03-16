// typeAliasis

// creted a type user;
type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUser(user: User): User {
  //   return {name:"" , email:"" , isActive:true}
  return user;
}

createUser({ name: "", email: "", isActive: true });

export{}
