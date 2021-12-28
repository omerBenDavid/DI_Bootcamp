// for(statement1; statement2; statement3) {
// 	//code block to be executed
// }

//statement 1: when di I start the loop - starting Point
//statement 2: 

// for(let counter = 0; counter <= 2; counter++){
// 	console.log('hello');
// }

//1st step
//    counter = 0
//    0 <= 2 -> true
//    console.log('hello)
//    counter = 1

//2st step
//    counter = 1
//    1<= 2 -> true
//    console.log('hello)
//    counter = 2

//3st step
//    counter = 2
//    2 <= 2 -> true
//    console.log("hello")
//    counter = 3

//4st step
//    counter = 3
//    3 <= 2 -> false
//    STOP THE LOOP
 
//Exercise 1
// for(let counter = 0; counter <= 15; counter++){
// 	if(counter % 2 == 0){
// 		console.log(`${counter} is even`);
// 	} else if(counter % 2 == 1){
// 		console.log(`${counter } is odd`);
// 	}
// }

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// let colors = ['blue', 'red', 'yellow'];

// for(let n = 0; n < 2; n++) {
// 	console.log('n is : ', n);
// 	console.log('the color is', colors[n]);
// }

// colors.push('pink');
// console.log(colors);

// for(let n = 0; n < colors.length; n++) {
// 	console.log('n is : ', n);
// 	console.log('the color is', colors[n]);
// }

//Exercise - adding s to each element 

// let fruits = ['apple', 'banana', 'pear', 'melon'];
// let b = 's';
// for(let n = 0; n <= fruits.length -1; n++){
// 	fruits[n]= fruits[n].concat(b);
// 	console.log(`I bought ${fruits}`);
// }

// break && continue

// let fruits = ['apple', 'banana', 'pear', 'melon'];

// for(let n = 0; n < fruits.length; n++){
// 	if(n==1){
// 		continue;
// 	}else {
// 		console.log(`I bought ${fruits[n]}`);
// 	}
// }

//for of -> arrays

// for(let elem of fruits){
// 	if(elem=='banana'){
// 		continue;
// 	}else {
// 		console.log(`I bought ${fruits[elem]}`);
// 	}
// }

//for in -> object
// let userCart = {
// 	username: "john",
// 	password: 1234,
// 	isUserSignIn: true,
// }

// if ('username' in userCart) {
// 	console.log(userCart['username']);
// }

// for (let key in userCart){
// 	console.log('elem is : ', key);
// 	console.log('the value is : ', userCart[key]);
// }



let users = [
	{
		username:"John",
		lastName : "Smith"
	},
	{
		username:"Tom",
		lastName : "Smith"
	},
	{
		username:"Lea",
		lastName : "Smith"
	}
];

//1. console.log the username of each user

for (let element of users){
	console.log(element['username']); //element retrieve each object in my array
}

let fruits = ['apples', 'bananas', 'pears', 'melons'];

