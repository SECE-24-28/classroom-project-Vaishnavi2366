console.log("Hello");
function myfunction(){
    // console.log("Button Clicked!");

    // const x = 20;
    // console.log(x);

    // var y = 30;
    // var y = 22; 
    // var y = 23;
    // console.log(y);

    // let z = 40;
    // z = 50;
    // console.log(z);

    // let name = document.getElementById('Name').value;
    // console.log(name);

    // var x = document.getElementById('Number1').value;
    // console.log(x);
    // var y = document.getElementById('Number2').value;
    // console.log(y);
    // var z = Number(x) + Number(y);
    // console.log(z);
    
    // for comparison
    // x=8;
    // if(x==0)
    // {
    //     console.log(True);
    // }
    // else{
    //     console.log(False);
    // }

    var x = document.getElementById('s1').value;
    var y = document.getElementById('s2').value;
    var z = document.getElementById('s3').value;

    if(x&&y&&z > 40)
        console.log("Pass");
    else{
        console.log("Fail");
    }
}

function grade(){
    let x = Number(document.getElementById('s1').value);
    if(x>90)
    {
        console.log("O Grade")
    }
    else if(x>80)
    {
        console.log("A+ Grade")
    }
    else if(x>70)
    {
        console.log("A Grade")
    }
    else if(x>60)
    {
        console.log("B+ Grade")
    }
    else if(x>50)
    {
        console.log("B Grade")
    }
    else
    {
        console.log("Fail")
    }

}

function forloop(){
    for(i=0;i<5;i++){
        console.log(i);
    }
}

function whileloop(){
    let i=0;
    while(i<5){
        console.log(i);
        i++;
    }
}

function dowhileloop(){
    let i=0;
    do{
        console.log(i);
        i++;
    }while(i<5);
}

function evennum()
{
    for(i=1;i<=100;i++)
    {
        if(i%2==0)
        {
        console.log(i);
        }
    }
}

function Array()
{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[2]);
}

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

function datee()
{
    let date = new Date();
    console.log(date);
}


function calculate() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;
    let result = "";

    // Using conditional statements
    if (op === "add") {
        result = a + b;
    } 
    else if (op === "sub") {
        result = a - b;
    } 
    else if (op === "mul") {
        result = a * b;
    } 
    else if (op === "div") {
        if (b === 0) {
            result = "Cannot divide by zero!";
        } else {
            result = a / b;
        }
    }

    document.getElementById("result").innerText = result;
}
