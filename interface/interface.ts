interface testUser {
  name: string;
  isPaid?: boolean; //optionsal
  checkpaid(name: string): boolean;
  checkCourse: (test: string) => string;
}

//reopenign of the interfaces

interface testUser {
  role: "admin" | "ta";
}

let testingUser: testUser;
testingUser = {
  //we have added the admin ;
  role: "admin",
  name: "sriram",
  checkpaid: function (name: string) {
    return true;
  },
  checkCourse: (name: string) => {
    return "course name";
  },
};

//inheritance
interface newInterface extends testUser {}

let newUser: newInterface;
newUser = {
  //we have added the admin ;
  role: "admin",
  name: "sriram",
  checkpaid: function (name: string) {
    return true;
  },
  checkCourse: (name: string) => {
    return "course name";
  },
};
