const prompt=require("prompt-sync")({sigint:true});
console.log("hello,welcome to food plaza");
console.log("let's create an account");
let username=prompt("please create username");
let password=prompt("lets create a password");
console.log("thankyou your account is created");

console.log("please enter your details for login");
let checkUsername=prompt("please enter username");
let checkPassword=prompt("enter your password");

while(username!=checkUsername && password!=checkPassword){
    console.log("wrong username and password please tryagain");
     checkUsername=prompt("enter username again");
     checkPassword=prompt("enter password again");
}
console.log(`hey ${username} you are connected`);

let balance=20;
console.log(`your current balance is ${balance}`);
let userRes=prompt(`do you want to add money `);

if(userRes=="yes"){
    let newBalance=prompt(`how much you want to add: `);
    balance=Number(newBalance)+balance;
    console.log("your balance is "+ balance+ "$")
}else{
    console.log("let's eat");
}

let takeOrder=prompt("what would you like to eat burger, paratha, pizza");
let order=takeOrder.toLowerCase();
const pizza=5;
const burger=2;
const paratha=2;
if(order=="burger"){
    balance=balance-burger;
}else if(order=="paratha"){
    balance=balance-paratha;
}else if(order=="pizza"){
    balance=balance-pizza;
}else{
    console.log("here is free water for you")
}
console.log(`order confirmed yo ordered ${order} your current balance is ${balance}$ thankyou visit again`);