// //--------------------
// //MAP
// //-------------------

// const restaurant = [20,15.2,10];

// const TAXES = 1.17;

//we want a new array that contains the prices included taxes
// function getPrices (){

// 	let pricesWithTaxes = [];

// 	for (let price of restaurant) {
// 		let priceIncludedTaxes = price*TAXES;
// 		pricesWithTaxes.push(priceIncludedTaxes)
// 	}

// 	console.log(pricesWithTaxes)

// }

// getPrices();

// Easier with MAP
//array.map(callback func)
//callback(element, index, array)

// const restaurant = [20,15.2,10];

// const TAXES = 1.17;

// let pricesWithTaxes = restaurant.map(function (elem, ind, arr) {
// 	return elem*TAXES
// })

// console.log(pricesWithTaxes)


// let pricesWithTaxes = restaurant.map((elem) => elem*TAXES)
// let pricesWithTaxesIndex = restaurant.map((elem, index) => elem*TAXES+index)

// console.log(pricesWithTaxes)



// Exercise - Student data in an object

// const students = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];

// Use map to create a new array containing only the score of the students
// result => [33,55]

// let studentScores = students.map((elem) => elem.score)

// console.log(studentScores) //[33,55]

// studentScores.forEach((elem, ind) =>  
// 	document.body.textContent += `The ${ind+1} student got a grade of ${elem}`)
// white_check_mark
// eyes
// raised_hands



// Create a new array of objects, containing the name,
 //score and isAboveAverage key
// if the students has a score bigger that 50, the key
// isAboveAverage will be true


// const studentsNew = [
// 	{name: 'Rich', score: 33, isAboveAverage : false}, 
//  	{name: 'Peter', score: 55, isAboveAverage : true}
// ];

// const studentsFootball = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];

// let studentsNew = studentsFootball.map((elem) => {
// 	let isAboveAverage = elem.score>50 ? true : false;
	//what we return will be pushed to the studentsNew variable
	//this is a feature of the map method
	
    // return {
	// 	name : elem.name,
	// 	score : elem.score,
	// 	isAboveAverage: isAboveAverage,
	// }

	//the same as the return above
// 	return {
// 		name : elem.name,
// 		score : elem.score,
// 		isAboveAverage,
// 	}

// 	//the same as the return above
// 	// return {...elem, isAboveAverage}

// })

// console.log(studentsNew)



// let famousPeople = [
//     {
//         name: "Angelina Jolie",
//         job: "actor",
//         age: 80
//     },
//     {
//         name: "Georges Clooney",
//         job: "actor",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         job: "actor",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         job: "singer",
//         age: 16
//     },
//     {
//         name: "Britney Spears",
//         job: "singer",
//         age: 100
//     }
// ]

// 1. Use the map method, to create a new array and push the name
// 2. Use the map method, to create a new array and to push an object in the new array.
// Each object should contain the name of the actor, and it's job
// 3. BONUS: Use for each to add each of thoses names on the DOM (in a paragraph, appended to a div with an id "container")


// let names = famousPeople.map(elem => elem['name']);
// console.log(names);

// let famousJobAndName = famousPeople.map(elem => {
// 	return {
// 		name: elem.name,
// 		job: elem.job,
// 	};
// });
// console.log(famousJobAndName);

// names.forEach(elem => {
// 	let body = document.body;
// 	let div = document.createElement('div');
// 	div.append(elem);
// 	body.append(div);
// })

// FILTER

// const numbers = [2,3,4,5,6,];

//create a new array, if only even numbers
// result [2.4,6]

// let evenNumbers = numbers.filter(function (elem, index, array) {
// 	return elem%2 === 0
// });

// let evenNumbers = numbers.filter(elem => elem%2 === 0);

// console.log(evenNumbers);

// element : 2
// --> pushed to the evenNumbers array
// element : 3
// --> skipped

// const students = [
// 	{name: 'Rich', score: 33},
// 	{name: 'Peter', score: 55},
// 	{name: 'John', score: 75},
// ];

//create new array with only the students with the highest score > 50
// let bestStudents = students.filter(elem => elem.score > 50);
// console.log(bestStudents);

//create new array 
//with only the name of the best students that have score of over 50
 
// let nameOfBestStudents = bestStudents.map(elem => elem.name);
// // console.log(nameOfBestStudents);

// let nameOfBestStudents = students
//                           .filter(elem => elem.score > 50)
// 						  .map(elem => elem.name);
// console.log(nameOfBestStudents)

//and name length bigger than four:

// let nameOfBestStudents = students
//                           .filter(elem => elem.score > 50 && elem.name.length === 4)
// 						  .map(elem => elem.name);
// console.log(nameOfBestStudents)

//_________________________________________________________
// ## Exercise 1:  create a new array that filters only the positive value
// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below
 //1
//  let goodVibes = numbers.filter(elem => elem > 0);
//  console.log(goodVibes);

// const characters = [
// 	{ name: 'James T. Kirk', series: ['Star Trek'] },
// 	{ name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
// 	{ name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
// 	{ name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
//  ];

// let nextGen = characters.filter(elem => elem.series.includes('Star Trek: The Next Generation'));
// console.log(nextGen);

//  ## Exercise 3 NOT MANDATORY - send me the result by slack
//  Use the filter method to create an array without duplicates. 
//  The result should be
//   ["blue","red","yellow"]
// const colors = ["blue", "red", "blue", "yellow"];

// // -----------------------
// // REDUCE
// // -----------------------

// //WITHOUT Initial Value
// const numbers = [10,20,35,40];

// let sumOne =  numbers.reduce((accumulator, currentValue,index,arr) => {
// 	console.log(`In the ${index} loop`)
// 	console.log("accumulator = ", accumulator);
// 	console.log("currentValue = ", currentValue);
// 	return accumulator+currentValue
// })

// 1st loop
// accumulator = numbers[0] = the first element in the array = 10
// currentValue = 20
// return accumulator+currentValue => return 30

// 2nd loop
// accumulator = return value of the 1st loop = 30
// currentValue = 35
// return accumulator+currentValue => return 65

// 3rd loop
// accumulator = return value of the 2nd loop = 65
// currentValue = 40
// return accumulator+currentValue => return 105

// console.log(sumOne)


//INITIAL VALUE
//1000 initial value

// const numbers = [10,20,35,40];

// let sum =  numbers.reduce((accumulator, currentValue,index,arr) => {
// 	return accumulator+currentValue
// }, 1000)

// 1st loop
// accumulator = initialValue = 1000
// currentValue = 10
// return accumulator+currentValue => return 1010

// // 2nd loop
// accumulator = returned value from the 1st loop = 1010
// currentValue = 20
// return accumulator+currentValue => return 1030

// // 3rd loop
// accumulator = returned value from the 2nd loop = 1030
// currentValue = 35
// return accumulator+currentValue => return 1065

// // 4th loop
// accumulator = returned value from the 3rd loop = 1065
// currentValue = 40
// return accumulator+currentValue => return 1105

// console.log(sum)


const people = ["John","Lea", "Tom"];
// secret society is JLT

let secretSociety =  people.reduce((accumulator, currentValue) => {
	return accumulator+currentValue[0]
}, "")

console.log(secretSociety)


// reduce exercises
const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55},
	{name: 'John', score: 75}
];

// ## Exercise 1
// Find the sum of the score of the students using reduce
// ## Exercise 2
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by changing map and reduce



let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

// ## Exercise 3 : NOT MANDATORY
// 1. Find the max value from an array of numbers using reduce

const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55},
	{name: 'John', score: 75}
];

let sum =  students.reduce((accumulator, element) => accumulator+element.score, 0)

// console.log(sum)

//  WITH INITIAL VALUE
// 1st loop
// accumulator = 0
// element = {name: 'Rich', score: 33}
// return accumulator+element.score = 33

// 2nd loop
// accumulator = 33
// element = {name: 'Peter', score: 55}
// return accumulator+element.score = 88


// 3rd loop
// accumulator = 88
// element = {name: 'John', score: 75}
// return accumulator+element.score = 163

// 2nd loop
// accumulator = the returned value from the 1st loop = 88
// element = {name: 'John', score: 75}
// return accumulator.score+element.score //PROBLEM


//  WITHOUT INITIAL VALUE - PROBLEM

// 1st loop
// accumulator = {name: 'Rich', score: 33}
// element = {name: 'Peter', score: 55}
// return accumulator.score+element.score = 88


// 2nd loop
// accumulator = the returned value from the 1st loop = 88
// element = {name: 'John', score: 75}
// return accumulator.score+element.score //PROBLEM


let voters = [
   {name:'Bob' , age: 30, voted: true},
   {name:'Jake' , age: 32, voted: true},
   {name:'Kate' , age: 25, voted: false},
   {name:'Sam' , age: 20, voted: false},
   {name:'Bob' , age: 30, voted: true},
];

console.log(voters[0]["voted"]) //true
console.log(0+voters[0]["voted"]) //0+true //0+1
//Result 3

let nbVoters = voters.reduce((accumulator,element) => {
   if (element.voted == true) {
	   return ++accumulator
   } else {
	   return accumulator
   }

}, 0)

console.log(nbVoters)

// 1st loop
// accumulator = 0;
// element.voted = true
// return accumulator++ = 1

// 2nd loop
// accumulator = 1;
// element.voted = true
// return accumulator++ = 2

// 3rd loop
// accumulator = 2;
// element.voted = false
// return accumulator => return 2

// WITH TERNARY OPERATOR
let nbVotersTernary = voters.reduce((accumulator,element) => element.voted ? ++accumulator : accumulator, 0)
console.log(nbVotersTernary)

// WITH TRUE AND FALSE
//true is equal to 1
//false is equal to 0
let nbVotersSecond = voters.reduce((accumulator,element) => 
								   accumulator+element["voted"], 0)
console.log(nbVotersSecond)











