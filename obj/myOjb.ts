function createUser():{}{
    return {}
}

function createCourse({name:string , isPaid: boolean }):{}{
    return {}
}

createCourse({name:"sam" , isPaid:"yes"});
createCourse({name:"sam" , isPaid:true});
createCourse({name:"sam" , isPaid:78});


function welcomeUser({name:string}):{name:string }{
    return {name:"string" }
}

let user={name:"x" , age:0 , male:true};
welcomeUser(user)

export{}