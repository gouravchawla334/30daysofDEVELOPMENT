//This is array
let arr1 = [1,2,3,4];
let arr2 = ['asd' , 'lkj','jhg','gfd' ]
let arr3 = [1,5,6,'are', [5,9,8]]
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

//Modifing and mutating arrays
arr1.shift()

//push 25 at the end of array
arr1.push(25)

// pop the last element of array
arr1.pop()

//to unshift the element means to add at the starting of array
arr1.unshift(65)

// //to check the length
arr1.length

// //to shift the element means remove first element
arr1.shift()

//to reveres the array
arr1.reverse()

//to concatinate the arrays
let arr4 = [9 ,8,6,8,6,8]
// arr1 = arr1.concat(arr4);

//to find the index 
arr1.indexOf(9)
console.log(arr1)

// This is object
let myobj = {
    name : "gourav",
    rollno: 1235469,
    marks: [9,8,6,5,4]
}

// console.log(myobj)
/* o/p: 
marks: (5) [9, 8, 6, 5, 4]
name: "gourav"
rollno: 1235469
[[Prototype]]: Object
*/
console.log(myobj.marks)