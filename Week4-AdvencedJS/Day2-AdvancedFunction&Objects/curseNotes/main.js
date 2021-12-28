 // ex1
// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? object of alex & 25
// console.log(personObj2); // -> ? object of alex & 25


// //ex2
// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };
    
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ? object of alex a 30
// console.log(personObj2); // -> ? object of john a 50

// ANONYMOUS FUNCTION

// function (){
//     console.log('hello');
// }

// () => console.log('hello');

// (function(){
//     alert('Hello' + name);
// })('Sara');

// SCOPE AND VARIABLES

// button.addEventListener('click', function(){
//     alert('You clicked');
// })


// initialize the DOM
// (function () {
//     console.log("in the self invoking func")
//     let btnFirst = document.getElementById("first");
//     let btnSecond = document.getElementById("second");
//     btnFirst.addEventListener("click", () => alert("you clicked the btn"))
//     btnSecond.addEventListener("mouseover", () => alert("you hovered over the btn"))
//   })();


// Exercise Self Invoking Function
// 1. Add in your html file a div with an id of container
// 2. Create a self invoking function that takes one parameter the name of the user
// 3. When invoked, the function adds the name of the user in a sentence in the div




// (function (param){
// let div = document.getElementById('container');
// console.log(div);
// div.textContent = `HI my name is ${param} `;
// })('what');

// THE NESTED (INNER) FUNCTION IS PRIVATE TO ITS CONTAINING (OUTER) FUNCTION.

// function outer() {
//     let test = 'test';
//     function inner(){
//         let username = 'Tom';
//         document.body.textContent = username;
//         test += 'function';
//         console.log(test);
//     }

//    // console.log(username); // not defined
//     inner();
// }

// outer();
// inner() not defined

// S C O P E
// let name  = 'john';
// // the outer func : checkName( ) is going to be ran once
// // the inner func, addExclamation() is going to run 3 times
// function checkName(){
//     let nameUppercase = name.upperCase();

//     function addExclamation(){
//         nameUppercase += '!';
//         console.log('In the addExclamation func name is :', nameUppercase);
//     };
//     addExclamation();
// }

// Nested Functions Exercise
// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variable `characters` equal to an empty array
// 3. In the `startWars` function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// and push it to the `characters` array.
// 4. In the `startWars` function, create a function named `displayCharacter` that should display in the body the fullname of the characters,
// 5. Call the `createCharacter` function a few times inside the starWars function
// and call the `displayCharacter` function once
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the spaceship the characters are in
// 7. The `displayCharacter` function should now display in the body the fullname and spaceship
// of the characters
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens? (edited) 

// function starWars(millenniumFalcon) {
//     let characters = [];
//     function createCharacter(firstname, lastname = "Smith") {
//       characters.push(firstname, lastname);
//     }
//     function displayCharacter() {
//       let body = document.body;
//       body.append(characters, millenniumFalcon, "\n");
//     }
//     createCharacter("Han", "Solo");
//     createCharacter("Luke", "Skywalker");
//     createCharacter("Lerry");
//     displayCharacter();
//   }
  
//   starWars("The Devastator");
//   starWars("Republic Attack Cruiser");


//read 

// Homework of today
// The exercises on curring and composing are not mandatory because we havn't gone over those notions yet
// Do the XP gold as it used nested functions that we learned today


// # Scope
// ​
// Global variables live until the page is discarded, like when you navigate to another page or close the window.
// ​
// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
// ​
// ---
// ​
// ---
// ​
// # Self invoking function
// ​
// **runs as soon as it is defined.** 
// ​
// **The anonymous function is invoked right after it has been defined.** 
// ​
// ```
// (function () {
//   statements
// })();
// ```
// ​
// It is a design pattern which is also known as a **Self-Executing Anonymous Function** and contains two major parts:
// ​
// * The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// ​
// * The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
// ​
// ​
// **Self-invoking functions are useful for initialization tasks**.
// For example, if we have a web page in which we want to attach event listeners to DOM elements and other initialization work, self-invoking functions would be the best tool for the job!
// ​
// ---
// ​
// # Nested function
// ​
// In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
// ​
// In JavaScript, all functions have access to the scope "above" them.
// ​
// Nested functions are made for convenience. It can access the outer variables and so can return a value. Nested functions are quite common in JavaScript.
// ​
// ## Note
// ​
// When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.
// ​
// Lexical scope is the ability for a function scope to access variables from the parent scope.
// ​
// ---
// ​
// # Closure
// ​
// Declare a function inside another function. 
// ​
// A nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. **No matter where, it still has access to the same outer variables.**
// ​
// The inner function remembers the environment it was created in.
// If we have a variable in the outer function, that increments in the inner function -> the inner function remembers
// ​
// **A closure is a function having access to the parent scope even after a parent function has closed**
// ​
// **Closures keep local variables alive from functions that should have destroyed them a long time ago.**
// ​
// **This is yet another useful case where closures come in handy. The point here is to allow others to access values you have inside your function, without letting them directly modify the variables.**
// ​
// **Remember, JavaScript still doesn’t have the concept of a private scope for attributes or methods on your classes, so simulating this might help you protect your code**
// ​
// This environment consists of any local variables that were in-scope **at the time the closure was created.** 
// ​
// Now when the code inside `inner()` looks for `num` variable, it first searches its own Lexical Environment (empty, as there are no local variables there), then the Lexical Environment of the outer `outer()` call, where it finds and changes it.
// ​
// ​
// ```javascript
// function outer (){
// 	let num = 0;
// ​
// 	function inner(){
// 		num ++ //num = num + 1
// 		return `the number is ${num}`;
// 	}
// ​
// 	return inner
// };
// ​
// let outerFunc = outer(); 
// console.log("outerfunc = ", outerFunc) //return the instance of the reference of the inner function
// outerFunc(); //num = 1
// console.log(outerFunc()); //num = 2
// ```
// ​
// In this case, the outer function returns a **reference** to the instance of the inner function that is created when outer function is run. 
// The instance of the inner function maintains a reference to its lexical environment, within which the variable *num* exists. For this reason, when `outerFunc()` is invoked, the variable *num* remains available for use.
// ​
// ​
// [To read before interviews](https://javascript.info/closure)


