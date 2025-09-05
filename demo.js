console.log("Functions");

// Declaring
// function printMyNameInConsole(){
//   console.log("My name is Ivy Almarez");
// }

// function addNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// printMyNameInConsole();
// addNumbers(5, 10);

// function addNumbers(number1, number2){
//    return number1 + number2;
// }

// console.log(addNumbers(5, 10));
// let result = addNumbers(5,8);
// console.log(result);

// function myFunctionName(){
//    console.log("Hello from myFunctionName!"); 
// }

// const x = function (number1, number2){
//     return number1 + number2;
// }

// let result = x(10,20);
// console.log(result);

// printMyNameInConsole();

// function printMyNameInConsole(){
//   console.log("My name is Ivy Almarez");
// }

// self invoking function
// (function(){
//    console.log("This is a self invoking function");
// })();


// function printMyName() {
//    console.log ("My name is Ivy.");   
// };

// const printMyName = () => {
//    return "Ivy";
// };

// const addNumbers = (number1, number2, number3) => number1 + number2 + number3;

// let result = addNumbers(5, 3, 6);
// console.log(result);

const formatName = (fName, lName) => {
   return `${fName} ${lName}`;
}

const x = formatName("Bruce", "Wayne");
console.log(x);