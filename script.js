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
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]) === typeof(0)){
            obj[key] *= 2;
        }
    }
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
