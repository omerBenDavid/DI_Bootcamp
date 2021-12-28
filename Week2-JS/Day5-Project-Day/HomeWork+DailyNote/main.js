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



// let users = [
// 	{
// 		username:"John",
// 		lastName : "Smith"
// 	},
// 	{
// 		username:"Tom",
// 		lastName : "Smith"
// 	},
// 	{
// 		username:"Lea",
// 		lastName : "Smith"
// 	}
// ];

// //1. console.log the username of each user

// for (let element of users){
// 	console.log(element['username']); //element retrieve each object in my array
// }

// let fruits = ['apples', 'bananas', 'pears', 'melons'];



// Home Work!
// Exercise 1
//1
let people = ['Greg', 'Mary', 'Devon', 'James'];

//1. Write code to remove “Greg” from the people array.
people.splice(0, 1);
console.log(people);
//2. Write code to replace “James” to “Jason”.
people.splice(2, 2, 'Jason');
console.log(people);
//3. Write code to add your name to the end of the people array.
people.push('Omer');
console.log(people);
//4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
let Miriam = people.indexOf('Mary');
console.log(Miriam);
//Just practice for me
// for(let search = 0; search <= people.length; search++){
//     if(search === Miriam){
//         console.log(search);
//     }
// }
//5. Write code to make a copy of the people array using the slice method.
let copyArr = people.slice(1,3)
console.log(copyArr);
//6. Write code that gives the index of “Foo”. Why does it return -1 ?
// it did not bring me the -1 because -1 is 
// when the index that you search is not in the array you look for.
let code = "Hallo my name is Foo";
let checking = code.indexOf("Foo");
console.log(checking);

//7. Create a variable called last which value is the last element of the array.
// the relationship between last index and array length is that they are the same
let last = people.pop();
console.log(last);
//part 2
//1
let iterators = people.values();
for(let elements of iterators) {
    console.log(elements);
}
//2
let i = people.values();
for(let element of i) {
    if(element === 'Jason'){
        console.log(element);
        break;
    }
}

//Exercise 2
//1
let colors = ['red', 'blue', 'yellow', 'white', 'black'];
//2
let color = colors.values();
for(let color of colors) {
    console.log(`My first favorite color is ${color}`);
}
//3
let suffixes  = ['My 1st choice', 'My 2st choice', 'My 3st choice', 'My 4st choice', 'My 5st choice']

//Exercise 3
//1
let askUse = prompt('Enter a number please');
console.log(typeof askUse);
//2
for(let ask of askUse) {
    while(ask < 10){
        prompt('Enter a number please');
    }
}



//challenge





