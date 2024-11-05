//basic object declaration
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

//function to check if object is empty
let schedule = {};
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));