//basic object declaration
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//function to check if object is empty
// let schedule = {};
// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }
// alert(isEmpty(schedule));
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule));

//function to sum salaries of employees
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// function sumSalaries(obj){
//     let sum = 0;
//     if(!isEmpty(salaries)){
//         for(let key in obj){
//             sum += obj[key];
//         }
//         return sum;
//     }
//     else{
//         return 0;
//     }
// }
// function isEmpty(obj){
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }
// alert(sumSalaries(salaries));

//function to multiply only the integers of the object by 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj){
//     for(let key in obj){
//         if(typeof(obj[key]) === typeof(0)){
//             obj[key] *= 2;
//         }
//     }
// }
// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);

//function to use object map, filter and reduce
// const arr = [1,2,3,4,5];
// console.log(arr);
// const arrEven = arr.filter(num => num % 2 === 0); //[2,4]
// console.log(arrEven);
// const arrTriple = arrEven.map(num => num * 3); //[6,12]
// console.log(arrTriple);
// const arrSum = arrTriple.reduce((total, currentItem) => total + currentItem); //18
// console.log(arrSum);

//function to change dash seperated string to camelCase string
// const myStr = "background-image-test";
// function camelize(str){
//     const strSplit = str.split("-"); //split string into seperated words not including "-"
//     //capetilize the first letters of each word except for the first word
//     const strCap = strSplit.map((item, index) => (index === 0 ? item : (item[0].toUpperCase()) + item.slice(1)));
//     //concat all the capet words into one
//     const strJoin = strCap.join("");

//     return strJoin;
// }
// camelize(myStr);

// //function to return values between a given range
// let arr = [5,3,8,1];
// function filterRange(arr, a, b){
//     //new array filter is run, only items that pass the test added to new array
//     let filter = arr.filter(item => (item >= a && item <= b));
//     return filter;
// }
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// //function to return original array changed with values between a given range
// let arr = [5,3,8,1];
// function filterRangeInPlace(arr, a, b){
//     arr.forEach((item, index) => {
//         //do not splice the actual items but what is outside this range
//         if(!(item >= a && item <= b)){
//             arr.splice(index, 1);
//         }
//     });
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

//function to decrease array in order
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => (b - a)); //instead of a-b assending that is ascending order
console.log(arr);
