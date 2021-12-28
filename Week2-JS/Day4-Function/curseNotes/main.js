let colors = ['blue', 'yellow', 'light pink'];

//Go trough the array, and console.log each latter of every color 

for(let i = 0; i < colors.length; i++){
	console.log("color is : ", colors[i]);
	console.log(`length of ${colors[i]} is : ${colors[i].length}`);
	for(let j = 0; j < colors[i]; j++){
	console.log(' j is', j);
	console.log(`the ${j+1}# letter of ${colors[i]} is ${colors[i][j]}`);
	}
}

//declaring a function
// function makeChocolate(){
// 	console.log("chocolate bar");
// }

// // invoking/calling a function
// makeChocolate();

// //declaring a function
// function makeChocolateBar(numberCacaoBeans){
// 	console.log(`chocolate bar made with ${numberCacaoBeans} cacao`);
// }

// // invoking/calling a function
// makeChocolateBar(10);

// //declaring a function
// function makeChocolateBar(numberCacaoBeans, typeOfChocolate){
// 	console.log(`${typeOfChocolate} chocolate bar made with ${numberCacaoBeans} cacao`);
// }

// // invoking/calling a function
// //between thw () we pass an argument
// makeChocolateBar(10, 'white');
// makeChocolateBar(25, 'milk');
// makeChocolateBar(60, 'dark');
// //Importance of the order
// makeChocolateBar('pink', 2);

//Exercise

// declare the function
function checkAge (personAge) {
	let mumAge = personAge*2;
	let dadAge = mumAge*1.2;
	console.log(`My age is ${personAge}, 
		my mom's age is ${mumAge}
		my dad's age is ${dadAge}`);
}

//invoking
checkAge(12);
checkAge(45);
checkAge(99);

// function with if statement

function checkAgeChild(ageChild){
	if (ageChild >= 18){
		console.log("you can drive")
	} else {
		console.log("you cannot drive")
	}
}

checkAgeChild(18)
checkAgeChild(12)

// //scope

// -- 1st example

//global scope
//declare variable in the global scope
//there are accessible in the local scope
let username = "John";

// // //local scope
function checkAgeLocal () {
	console.log("username is : ", username)
}

checkAgeLocal();


// -- 2nd example

//local scope
function checkAgeSecond (personAge) {
	//declare a variable in the local scope
	// it is NOT accessible in the global scope
	let user = "John";
}

checkAgeSecond(12);

// console.log("user is : ", user) //undefined
// console.log("personAge is : ", personAge) //undefined

// Example

//global scope
let age = 12;

//local scope
function checkAgeThird () {
	console.log("IN THE FUNC age is : ", age) //12
	age *= 2;
	console.log("IN THE FUNC AFTER CHANGE age is : ", age) //24
}

console.log("BEFORE FUNC age is : ", age) //12

checkAgeThird();

//  when a variable is declared in the global scope
//  it can be accessed in the local scope
//	it can be changed in the local scope

console.log("FINAL age is : ", age) //24


// //local scope
function checkAgeFourth () {
	let age = 12;
}

console.log("BEFORE FUNC age is : ", age) //undefined

checkAgeFourth();

console.log("FINAL age is : ", age) //undefined

// VAR 
// FUNCTION scope
// if you declare a variable inside a function scope
// (with var, let or const), you cannot access it the global scope
function checkAgeFive () {
	var age = 12;
}

console.log("BEFORE FUNC age is : ", age) //undefined

checkAgeFive();

console.log("FINAL age is : ", age) //undefined


// //LOCAL SCOPE

// // declare i in the local scope 
// //with the let keyword
for (let i = 0; i < 3; i++){
	console.log("INSIDE i is : ", i)
}

// // //not accessible in the global scope
// console.log("OUTSIDE i is : ", i) //undefined

// // LOCAL SCOPE
// // different the global scope
// // - function
// // - loop
// // - if


// // BLOC SCOPE
// // - loop
// // - if


// // FUNCTION SCOPE
// // - function

// // WITH VAR

// // declare i in the local scope 
// //with the var keyword
for (var j = 0; j < 3; j++){
	console.log("INSIDE j is : ", j)
}

console.log("OUTSIDE j is : ", j) // accessible

// // * let and const are block scope and function scope
// // * var is not block scope, but it's function scope

// //global scope
let x = "hello"

for (let x = 0; x < 3; x++){
	console.log("INSIDE x is : ", x)
}

console.log("OUTSIDE x is : ", x) //hello

//with var
var y  = "hello";

for (var y = 0; y < 3; y++){
	console.log("INSIDE y is : ", y)
}

console.log("OUTSIDE y is : ", y) // 3

//function that will display the price each of us have to pay.
//including taxes 1.17%

// // ----- Return---- 

function addition (a, b) {
	let sum = a + b;
	//1st step, return the variable
	return sum;
}

addition(2,3);
addition(4,7);

// 2nd step: I call the function
let newSum = addition(2,3)*10
// the same as : let newSum = the value of the sum variable * 10
// the same as : let newSum = 5 * 10

//returning several values
function additionSecond (a, b) {
	let normalSum = a + b;
	let superSum = (a + b)*2;
	return [normalSum, superSum];
}

console.log(additionSecond(2,3));

let newSumSecond = additionSecond(2,3)[0]*10

// return no value

function addition (a, b) {
	let normalSum = a + b;
	console.log("normalSum is :", normalSum)
	return;
	console.log("hello")
	// WONT BE ACCESSED console.log("hello")
}

addition(2,3);

// Example

function calculator (a, b, operator) {
	let resultNumber;
	if(operator == "+") {
		resultNumber = a + b;
	} else if (operator == "-") {
		resultNumber = a - b;
	} else {
		resultNumber = "I don't know"
	}

	return resultNumber;
}

// // console.log(resultNumber); //undefined
console.log(calculator(2,3, "-"))

let numberWithTaxes = calculator(2,3, "+") * 1.17;





