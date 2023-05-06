
var user = document.getElementById('user'),
    password = document.getElementById('password'),
    adduser = document.getElementById('Add'),
    loginbtn = document.getElementById('login');

let userset = new Set(['mina' ,'sameh' ,'tom']);    
let passwordset = new Set(['12345' ,'54321' ,'11223']);
let userarr = [...userset];
let passarr = [...passwordset];


loginbtn.onclick  = ()=>{

    if(userset.has(user.value.toLowerCase()) && passwordset.has(password.value) && userarr.indexOf(user.value) == passarr.indexOf(password.value))
    {
        window.location.href = "https://minamohsen466.github.io/iphone/iphone.html";
    }    
    else
    {
        prompt("incorrect username or password")
    }
}

adduser.onclick =  ()=>{

    if(user.value === "" || password.value === "")
    {
        prompt("empty");
    }
    else if(userset.has(user.value.toLowerCase())){

        prompt('like sis OR invalid UserName');
    }
    else
    {
        userset.add(user.value.toLowerCase());
        passwordset.add(password.value);
    }
}
        
// console.log(userset);
// console.log(passwordset);
// console.log(userarr);
// console.log(passarr);