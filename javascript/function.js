// // Function in javascript
// let name = prompt("Enter your name");

// // We can define a function in a multiple way:
// //1. function greet(name, thanks = 'thanks');
// //2. function greet(name){}
// //3.const mygreet = function(name){}
// //4. we also make an object function also known as anonyms function


// function greet(name){
//     // console.log(`happy birthday ${name}`);
//     document.write(`happy birthday ${name}`);
//     document.write("<br/>")
// }

// console.log(greet(name));


// const obj = {
//     name:"Gourav chawla",
//     game:function(){
//         return "PUBG";
//     }
// }
// document.write("your fav game is "+obj.game());

//Scope:

// let/const has block level scope!
// var has function level scope!


var i = 12;
console.log("We are in outer block ",i);
function block(){
    var i = 100;
    console.log("we are in inner block",i);
}
console.log(block())

// o/p:
// We are in outer block  12
// function.js:33 we are in inner block 100

function block(){
      var i = 100;
    console.log("we are in inner block",i);
}
console.log(block())
