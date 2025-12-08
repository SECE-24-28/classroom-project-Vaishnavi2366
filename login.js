function password()
{
    let x = {
    "username":"Vaishu",
     "passcode":"1234"
}
let y = document.getElementById('name').value;
let z = parseInt(document.getElementById('password').value);
if(y==x.username && z==x.passcode){
    console.log("login successful!");
}
else{
    alert("login failed")
}

}


let execute = (username = document.getElementById("one").value) => {
    console.log(username);
}