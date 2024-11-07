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

// //function to decrease array in order
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => (b - a)); //instead of a-b assending
// console.log(arr);

// //function to copy an array of strings then sort it
// let arr = ["HTML", "JavaScript", "CSS"];
// let copyArrSort = arr.slice().sort(); //i can chain these two methods and it still works
// console.log(copyArrSort);
// console.log(arr);

// //function to extract the names of users from an array of users
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};
// let users = [john, pete, mary];

// let names = users.map(user => user.name);
// console.log(names);

// //function to extract id name and surname, merge name and surname as fullName
// let john = {name: "John", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Mary", surname: "Key", id: 3};

// let users = [john, pete, mary];
// let usersMapped = users.map(user => ({fullName: user.name + " " + user.surname, id: user.id}));

// console.table(users);
// console.table(usersMapped);

// //function that gets an array of user and then sorts them by name
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// function sortByAge(arr){
//     let sorted = arr.sort((a, b) => (a.age - b.age));
//     return sorted;
// }
// console.table(arr);
// console.table(sortByAge(arr));

//function to randomly reorders (shuffle) all elementes of an array with equal probability
//sort() does not work here
let arr = [3, 5, 7];
//here item is declared but it is not used, we could have written anything in place
function shuffle(arr){
    arr.forEach((item, index) => {
        let j = Math.floor(Math.random() * arr.length); //random number between 0 and array length - 1
        let temp = arr[index];
        arr[index] = arr[j];
        arr[j] = temp;
    });
    return arr;
}
console.log(shuffle(arr));
