// //Exercise 1 - Favorite Food
// let favFood = 'sushi';
// let meal = 'breakfast';
// let output = ` i eat ${favFood} at every ${meal}`;
// console.log(output);
// //Exercise 2 Series
// let watchedSeries = ['black mirror', 'money heist', 'the big bang theory'];

// //1
// let watchedSeriesLength = watchedSeries.length;
// console.log(watchedSeriesLength);
// //2
// let textSeries = watchedSeries.toString();
// console.log(` my favorite series that i watch every day by order are: ${textSeries}`);
// //3
// let solution = ` i watched ${watchedSeriesLength} series: ${watchedSeries}`;

// //Part 2
// //1
// watchedSeries.splice(2,2, 'friends');
// console.log(watchedSeries);
// //2
// watchedSeries.push('fight-club');
// console.log(watchedSeries);
// //3
// watchedSeries.splice(0,0, 'Wanted');
// console.log(watchedSeries);
// //4
// // let indexSeries = watchedSeries.indexOf('black mirror');
// // console.log(indexSeries);
// let differently = watchedSeries.filter(function(f) { return f !== 'black mirror' })
// console.log(differently);
// //5 
// console.log(watchedSeries[2]);
// //6 
// console.log(watchedSeries);

// //Exercise 3
// let celTemp = 25;
// let farTemp = (celTemp / 5 * 9) + 32;
// console.log(`The ${celTemp} in fahrenheit is ${farTemp}`);

// //Exercise 4
// let c;
// let a = 34;
// let b = 21;
// console.log(a+b) //first expression
// // Prediction:55
// // Actual:55

// a = 2;

// console.log(a+b) //second expression
// // Prediction:23
// // Actual:23

// //3 The value of C is: undefined;

// console.log(3 + 4 + '5');
// //4 is 75

// //4

// typeof(15)
// // Prediction:number
// // Actual:

// typeof(5.5)
// // Prediction:number
// // Actual:

// typeof(NaN)
// // Prediction: undefined
// // Actual:

// typeof("hello")
// // Prediction: string
// // Actual:

// typeof(true)
// // Prediction: bool
// // Actual:

// typeof(1 != 2)
// // Prediction: boolean
// // Actual:

// "hamburger" + "s"
// // Prediction: string
// // Actual:

// "hamburgers" - "s"
// // Prediction: string
// // Actual:

// "1" + "3"
// // Prediction: string
// // Actual:

// "1" - "3"
// // Prediction: string
// // Actual:

// "johnny" + 5
// // Prediction: string
// // Actual:

// "johnny" - 5
// // Prediction: string
// // Actual:

// 99 * "hello"
// // Prediction: string
// // Actual:

// 1 != 1
// // Prediction:
// // Actual:

// 1 == "1"
// // Prediction: true - boolean
// // Actual:

// 1 === "1"
// // Prediction: false - boolean
// // Actual:

// //5
// 5 + "34"
// // Prediction: string
// // Actual:

// 5 - "4"
// // Prediction: string
// // Actual:

// 10 % 5
// // Prediction: number
// // Actual:

// 5 % 10
// // Prediction: number
// // Actual:

// "Java" + "Script"
// // Prediction: string
// // Actual:

// " " + " "
// // Prediction: string
// // Actual:

// " " + 0
// // Prediction: string
// // Actual:

// true + true
// // Prediction: boolean
// // Actual:

// true + false
// // Prediction: boolean
// // Actual:

// false + true
// // Prediction: boolean
// // Actual:

// false - true
// // Prediction: boolean
// // Actual:

// !true
// // Prediction: boolean
// // Actual:

// 3 - 4
// // Prediction: number
// // Actual:

// "Bob" - "bill"
// // Prediction: string
// // Actual:

// // Exercise gold
// // Exercise 1
// let me = ["my","favorite","color","is","blue"];
// console.log(me.toString());

// // Exercise 2
// // EX 1
// let str1 = "mix";
// let str2 = "pod";

// //EX 2
// const str11 = str1.slice(2,3);
// const str22 = str2.slice(0,2);

// // EX 3
// const str111 = str1.slice(0,2);
// const str222 = str2.slice(2,3);

// const newStr1 = str22 + str11; 
// const newStr2 = str111 + str222;

// //EX 4
// console.log(newStr1);
// console.log(newStr2);

// // Exercise 3
// //1. Prompt the user for the first number.
// //2. Store the first number in a variable called num1.
// //Hint : console.log the type of the variable
// // num1. What should you do to convert it to a number ?
// //3. Prompt the user for the second number.
// //4 Store the second number in a variable called num2.
// let num1 = parseInt(prompt("Please select first number"));
// let num2 = parseInt(prompt("Please select second number"));

// console.log(typeof num1);

// //5. Create an Alert where the value is the SUM of num1 and num2.
// let sumNum = num1 + num2;
// alert(sumNum);


// //Ninja H W
// //Exercise 1
// //true 5 bigger then 1
// console.log(5 >= 1)
// //false - different values
// console.log(0 === 1)
// //false - different values
// console.log(4 <= 1)
// // false - different values
// console.log(1 != 1)
// //false - a smaller then b
// console.log("A" > "B")
// //true - c is bigger
// console.log("B" < "C")
// //true - i didnt knew
// console.log("a" > "A")
// //false - b is bigger
// console.log("b" < "A")
// //false - not equal
// console.log(true === false)
// //false - are equal
// console.log(true != true)


// //Exercise 2
// const strNumber = ['1', '2', '3', '4','5']; 
// const arrNum = strNumber.map((i) => Number(i));
// console.log(arrNum);
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// console.log(arrNum.reduce(reducer));

//________________________
//JavaScript Exercise Day1
console.log('To be or not to be'.indexOf('To'));
console.log('To be or not to be'.indexOf(' '));
console.log('To be or not to be'.indexOf('o', 2));
console.log('To be or not to be'.indexOf('be', 4));
console.log('To be or not to be'.indexOf('to'));
console.log('To be or not to be'.indexOf('B'));
console.log('To be or not to be'.indexOf('', 9));

// EX1
let food = 'sushi';
let meal = 'breakfast';

console.log('i eat ' + food + ' at every ' + meal);

// EX2
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];

let watchedSeriesLength = watchedSeries.length;
console.log(watchedSeriesLength);

let myWatchedSeries = watchedSeries.toString();

console.log(`I watched ${watchedSeriesLength} series : ${myWatchedSeries} `);

//part II

watchedSeries.pop();
watchedSeries.push('friends');
console.log(watchedSeries);
watchedSeries.push('Breaking Bad');
watchedSeries.unshift("The-Pajamas");
watchedSeries.splice(1, 1);
let indexSeries = watchedSeries.indexOf('black mirror');
console.log(indexSeries);
let differently = watchedSeries.filter(function(f) { return f !== 'black mirror' })
console.log(differently);
console.log(watchedSeries);

//Ex3

// let celcius = prompt('return temperature in fahrenheit');
// let fahrenheit = (celcius*1.8)+32;
// console.timeLog(`${celcius}is ${fahrenheit} in fahrenheit`);

// Daily Challenge
//Ex 1
let fruits = ['Bananas', 'Apples', 'Oranges', 'Bluberries'];

fruits.shift();

fruits.sort();

fruits.push('Kiwi');

fruits.splice(0,1);

fruits.reverse();

console.log(fruits);

//Ex 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let orangeSearching = moreFruits[1][1];
console.log(orangeSearching);








