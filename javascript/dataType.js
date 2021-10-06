/*
Data type in Js
1. Primitive Data type
    a.string
    b.number
    c.boolean
    d.null
    e.undefined
    f.symbol

2. Reference Data type
    a.Arrays
    b.objects literals
    c.functions
    d.Dates

*/
//Primitive data type

// string

var name="Gourav";
console.log("My name is: "+name);
console.log("Data type is " + (typeof name))

//number

let marks=1000;
console.log("My marks is: "+ marks);
console.log("Data type is " + (typeof marks))

//boolean

let isBool=true;
console.log("data type is: "+ isBool);
console.log("Data type is " + (typeof isBool));

//null

var nullVar =null;
console.log("Value of null is: "+ nullVar);
console.log("Data type is " + (typeof nullVar));

//undefined

var undefVar =undefined;
console.log("value of undefVar is: "+ undefVar);
console.log("Data type is " + (typeof undefVar));

//Reference data type

//functions

function Funname(){

}
console.log("Data type of function is:" + (typeof Funnam));

//arrays

arr1=[1,2,3,4];
console.log("Array is:" + arr1);
console.log("Data type of array is: "+ (typeof arr1));

//object literls
var objLit = {
    Gourav: 50,
    Ram: 120,
    Shyam: 130
};
console.log('Object literals is ' + objLit);
console.log("data type of object literals is:" + (typeof objLit))

//Date
let date=new Date();
console.log("Date is : " + date);
console.log("Datatype of date is : " + (typeof date));