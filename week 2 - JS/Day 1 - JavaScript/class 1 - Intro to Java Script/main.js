// variable name in camelCase
//alert("hello");


// let pet => Declaring
// - 'dog => assigning
// let pet = 'dog';

// let color; // declaring
// console.log(color); // undefined

// color = "blue"; // assigning
// console.log(color);  //defining

// color = 'red'; //Updating
// console.log(color) // "red"
         
//can be changed
// let computer = "apple";
// console.log(computer);
// computer = "hp";
// console.log(computer);

//cannot be changed
// const language = "javascript";
// console.log(language);

let username = "john";
let age = 22;
console.log(`${username} is ${age} years old`);

// ------------ EXERCISE 1 --------------
let addressNumber = 21;
let addressStreet = "maale hzofim";
let country = 'israel';

let globalAddress = `hey, you can come to my place at ${country}, it is on ${addressStreet} street, in ramat gan, and we could all study together. oh and dont forget street number is ${addressNumber}`
console.log(globalAddress);

//------------ EXERCISE 2 -------------
let birthYear = 1995;
let nxtYear = 2022;
let nxtAge = nxtYear - birthYear;
console.log(`i will be ${nxtAge} in ${nxtYear}`);

let Age = 26.9321;
console.log(Age.toFixed(0));
let NumString = 10;
console.log(NumString.toString());

let email = "omer1704@gmail.com";
let doesInclude = email.includes("@");
console.timeLog(doesInclude);

// ----------- Arrays ------------
// john
// length -> 4
// position : index Start at 0, 1, 2, 3, 4 ...

let firstLetter = email[0];
console.log(firstLetter);

// Important!
 // a Method is! when there are ()
 //in the end of the method like:
 // name.toUpperCase()

// ------------ EXERCISE 3 ------------
let myFavoritePets = ['dog', 'alpaca', 'seal', 'hamster'];
console.log(myFavoritePets[0]);

myFavoritePets.splice(1, 0, 'Donkey');

myFavoritePets.splice(4, 1, 'horse');

console.log(myFavoritePets);

console.log(myFavoritePets.length);

// ---------- EXERCISE 4 ---------
let ages = prompt('How old are you?', 20);
alert(`You Are ${age} years old`); // you are 20 year old

// let isBoss = confirm('Are you the boss?');
// alert(isBoss); // true if OK is pressed
// Arrays is a list of elements
// let colors = ['blue', 'red', 'yellow'];
// let list = ['blue', 2, true, ['chocolate', 'vanila']];
// console.log('the length of the array is:', colors.length);
// console.log(colors[1]);

// colors[1] = 'black';
// console.log(colors);

// colors.push = 'orange';
// console.log(colors);

// colors.pop();
// console.log(colors);

let shopping = ['shampoo', ['banana', 'apple'], 'water', ['chocolate', 'vanilla', 'caramel']];
console.log(`i bought ${shopping[1]}, an ${shopping[1][1]} and some ${shopping[3][0]}`)



// EXAMPLE
let y = false;
console.log(!y);

let test = true;
console.log(test);
console.log(!test);







