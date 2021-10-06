let variable='gourav';
console.log (typeof(variable));

//lets change variable string to number
variable = Number('gourav');
console.log (typeof(variable));

let no = 41;
console.log(typeof(no));

//change the no to string
no = String(41);
console.log(typeof(no));

let date = String(new Date());
console.log(date,(typeof date));

let arr1 = [1,2,3,4,5,6,7,8,9];
let arr = String([1,2,3,4,5,6,7,8,9]);
console.log(arr.length);
console.log(arr)    
console.log(arr.toString() + typeof(arr));
console.log(arr1);

let str = Number('3434');
str = Number('343f');
// o/p: NaN:- not a number; 

str = Number(false);
console.log(str)

let vv = 3.24852697;
// used to fixed decimal after float number
console.log(vv.toFixed(4));


//type coercion
let num = "698";
let num2 = 78;
console.log(num + num2)
// o/p: 69878

num = Number("698")
console.log(num + num2)
// o/p: 776