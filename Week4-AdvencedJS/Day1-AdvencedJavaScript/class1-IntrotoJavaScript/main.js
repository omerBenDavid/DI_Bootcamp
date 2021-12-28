// //1st exercise
// //You need to guess what will be console logged, and explain why


let username = "John";

function checkName (){
	console.log("In the function",username);//john 
	username += "Smith";
	console.log("Still in the function",username); // john smith
}

console.log("before the function", username);//john

checkName()

console.log("after the function", username); //smith


// //2ns exercise
// //You need to guess what will be console logged, and explain why


// let username = "John";

// function checkName (){
// 	let username = "Tom";
// 	console.log("In the function",username);  //Tom
// 	username += "Smith";
// 	console.log("Still in the function",username); //Tom smith
// }

// console.log("before the function", username); //john

// checkName()

// console.log("after the function", username); //John Smith

// function say(message) {
//     return message;
// }

// // ASSIGNING THE RESULT OF THE INVOKATION OF THE FUNCTION
// // TO THE VARIABLE WORD
// let word = say("Hello"); //-> word = "Hello"
// document.body.textContent = word;


//------------------
// multiple return statements in the function 
//------------------

// function compare(a, b, operator) {
//     return a+b;
//     console.log("hello") //this line won't be executed
// }

// function compare(a, b, operator) {
//     if (operator === "+") {
//         return a+b;
//     } else if (operator === "-") {
//         return a-b;
//     } else {
//     	return "ERROR";
//     }
//     console.log("Hello"); //never executed
// }

// let resultA = compare(2,3,"+");
// console.log(`The result of the function is ${resultA}`) //5

// let resultB = compare(2,3,"-");
// console.log(`The result of the function is ${resultB}`) //-1

// let resultC = compare(2,3,"*");
// console.log(`The result of the function is ${resultC}`) // ERROR


// //ARRAY DESTRUCTURING

// let colors = ["blue", "red", "yellow"];
// // let colorA = colors[0];
// // let colorB = colors[1];
// // let colorC = colors[2];
// let [colorA, colorB, colorC] = ["blue", "red", "yellow"];
// console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


// // let [colorA, colorB, colorC] = colors;
// // console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


// // let [colorA, colorB, colorC] = ["blue", "red"];;
// // console.log("color A is :" , colorA, "color B is :" , colorB, "color C is :" , colorC)


// function getColors (){
// 	let colors = ["blue", "red"];
// 	return colors;
// }

// let myFavColors = getColors();
// console.log(myFavColors)

// let [firstColor, secondColor] = myFavColors;
// console.log("firstColor is :" , firstColor, "secondColor is :" , secondColor)


// // let [firstColor, secondColor] = getColors();
// // console.log("firstColor is :" , firstColor, "secondColor is :" , secondColor)

// //OBJECT RESTRUCTURING

// let family = {
// 	name: "Smith",
// 	member : 2
// }

// // // let first = family["name"];
// // // let second = family["member"];

// let {name, member} = family
// console.log("name is ",  name, "member is ", member)



// function getFamily(){
// 	let family = {
// 		name: "Smith",
// 		member : 2
// 	}
// 	return family;
// }

// let details = getFamily()
// let {name, member} = details

//Exercise Object destruction

// const employees = [
// 	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
// 	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
// ]

// for (let emp of employees) {
// 	// document.body.textContent += `${emp.name}, ${emp.email}, ${emp.phone}`
// 	document.body.textContent += `${emp["name"]}, ${emp["email"]}, ${emp["phone"]}`
// }

// //Obj destructuring
// for (let emp of employees) {
// 	let {name,email,phone} = emp;
// 	document.body.textContent += `${name}, ${email}, ${phone}`
// }



// let btn = document.getElementById('btn');

// btn.addEventListener('click', clickBtn);

// function clickBtn() {
//     document.body.textContent = 'you clicked';
// }

// btn.addEventListener('click', function(){
//     document.body.textContent = 'you clicked';
// });

// btn.addEventListener('click', () =>  document.body.textContent = 'you clicked');


// Exercise on functions
// 1. Greet the user (ie. using an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

let greet = document.querySelector('p');

//*
greet.addEventListener('click', clickP);
function clickP(){
    document.body.textContent = 'wow that was an amazing click!';
}
//**
greet.addEventListener('click', function(){
    document.body.textContent = 'wow that was an amazing click!';
});
//*** 
greet.addEventListener('click', () => document.body.textContent = 'wow that was an amazing click!');


//Function declaration
// greetUserOne("Hello")

// function greetUserOne(msg) {
// 	document.body.textContent = msg;
// 	return msg;
// }

// greetUserOne("Hello")


// //Function expression
// const greetUserTwo = function (msg) {
// 	document.body.textContent = msg;
// 	return msg;
// }

// greetUserTwo("Hello")

// //Arrow function
// const greetUserThree = (msg) => {
// 	document.body.textContent = msg;
// 	return msg;
// }

// greetUserThree("Hello")

// TERNARY OPERATOR
// condition ? condition's true 



//---------------------------------
// Array methods and arrow function
//---------------------------------

// 1st possibility: Callback function
// let classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

// //With function declaration
// classmates.forEach(showClassmates)

// function showClassmates(classmateName,classmateIndex, classmateArray){
// 	console.log("classmateName" , classmateName)
// 	console.log("classmateIndex" , classmateIndex)
// 	console.log("classmateArray" , classmateArray)
// }

//with anonymous function
// classmates.forEach(function (element, index, array) {
// 	console.log(`${element} is at the index ${index}`)
// })

// //with anonymous arrow function
// classmates.forEach((element, index, array) => console.log(`${element} is at the index ${index}`))

// classmates.forEach((element) => console.log(`${element}`))

// Exercise
// Using this let classmates = ["Josh", "Lily", "Sophie", "Mark"];
// Use for each and arrow function, to add a & after Sophie and a ! after all the other names
// the result is ['Josh!', 'Lily!', 'Sophie&', 'Mark!']
// Try to use ternary operator


let classmates = ["Josh", "Lily", "Sophie", "Mark"];

classmates.forEach((elem, ind, arr) => elem === 'Sophie' ? arr[ind] += '&' : arr[ind] += '!')

console.log(classmates);

// # Array methods
// ​
// 1. forEach() calls a provided callback function once for each element in an array in ascending index order.
// ​
// 2. **callbackFn**
// Function to execute on each element. It accepts between one and three arguments:
// ​
// // Inline callback function
// ​
// ```
// forEach(function callbackFn(element) { ... })
// forEach(function callbackFn(element, index) { ... })
// forEach(function callbackFn(element, index, array){ ... })
// forEach(function callbackFn(element, index, array) { ... }, thisArg)
// ```
// ​
// // Callback function
// ​
// ```
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
// ```
// ​
// // Arrow function
// ​
// ```
// forEach((element) => { ... } )
// forEach((element, index) => { ... } )
// forEach((element, index, array) => { ... } )`
// ```
// ​
// **forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable.**
// ​
// ---
// ​
// # Other array methods
// ​
// Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.
// ​
// ---
// ​
// ## Some
// ​
// Array.prototype.some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// ​
// ---
// ​
// # Functions
// ​
// It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.
// ​
// The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.
// ​
// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
// ​
// ---
// ​
// ## Parameters & Arguments
// ​
// * A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term)
// ​
// * An argument is the value that is passed to the function when it is called (it’s a call time term).
// ​
// ---
// ​
// ## Default parameter
// ​
// Which is only evaluated and assigned if the parameter is missing.
// ​
// ---
// ​
// ## return
// ​
// When a return statement is used in a function body, the execution of the function is stopped. If specified, a given value is **returned to the function caller.**
// ​
// ```javascript
// function square(x) {
//    return x * x;
// }
// let demo = square(3);
// // demo will equal 9
// ```
// ​
// Every function in JavaScript returns undefined, unless otherwise specified
// ​
// ---
// ​
// # Function hoisting
// ​
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// ​
// When you execute a piece of JavaScript code, the JavaScript engine creates the global execution context.
// ​
// The global execution context has two phases: creation and execution.
// ​
// During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This feature is known as hoisting in JavaScript.
// ​
// ```
// var counter;
// ​
// console.log(counter); // undefined
// counter = 1;
// ```
// ​
// Technically speaking, during the creation phase of the global execution context, the JavaScript engine places the variable counter in the memory and initializes its value to undefined.
// ​
// **Important: all undeclared variables are global variables.**
// ​
// ```
// function hoist() {
//   a = 20;
//   var b = 100;
// }
// ​
// hoist();
// ​
// console.log(a);
// /*
// Accessible as a global variable outside hoist() function
// Output: 20
// */
// ​
// console.log(b);
// /*
// Since it was declared, it is confined to the hoist() function scope.
// We can't print it out outside the confines of the hoist() function.
// Output: ReferenceError: b is not defined
// */
// ```
// ​
// ---
// ​
// # Function declaration
// ​
// ```
// hoisted(); // Output: "This function has been hoisted."
// ​
// function hoisted() {
//   console.log('This function has been hoisted.');
// };
// ```
// ​
// ---
// ​
// # Function expression
// ​
// Function expressions in JavaScript **are not hoisted**, unlike function declarations.
// ​
// ```
// var x = function(y) {
//    return y * y;
// };
// ```
// ​
// The function keyword can be used to define a function inside an expression.
// ​
// ```
// function [name]([param1[, param2[, ..., paramN]]]) {
//   statements
// }
// ```
// ​
// `name` 
// function name, which can be omitted in function expressions to create **anonymous functions**. 
// ​
// A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. 
// ​
// # Arrow function
// ​
// The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.
// ​
// Arrow functions were added in 2015, mostly to make it possible to write small function expressions in a less verbose way.
// ​






