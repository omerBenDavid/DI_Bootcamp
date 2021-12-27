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
// let people = ['Greg', 'Mary', 'Devon', 'James'];

// //1. Write code to remove “Greg” from the people array.
// people.splice(0, 1);
// console.log(people);
// //2. Write code to replace “James” to “Jason”.
// people.splice(2, 2, 'Jason');
// console.log(people);
// //3. Write code to add your name to the end of the people array.
// people.push('Omer');
// console.log(people);
// //4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// let Miriam = people.indexOf('Mary');
// console.log(Miriam);
// //Just practice for me
// // for(let search = 0; search <= people.length; search++){
// //     if(search === Miriam){
// //         console.log(search);
// //     }
// // }
// //5. Write code to make a copy of the people array using the slice method.
// let copyArr = people.slice(1,3)
// console.log(copyArr);
// //6. Write code that gives the index of “Foo”. Why does it return -1 ?
// // it did not bring me the -1 because -1 is 
// // when the index that you search is not in the array you look for.
// let code = "Hallo my name is Foo";
// let checking = code.indexOf("Foo");
// console.log(checking);

// //7. Create a variable called last which value is the last element of the array.
// // the relationship between last index and array length is that they are the same
// let last = people.pop();
// console.log(last);
// //part 2
// //1
// let iterators = people.values();
// for(let elements of iterators) {
//     console.log(elements);
// }
// //2
// let i = people.values();
// for(let element of i) {
//     if(element === 'Jason'){
//         console.log(element);
//         break;
//     }
// }

// //Exercise 2
// //1
// let colors = ['red', 'blue', 'yellow', 'white', 'black'];
// //2
// let color = colors.values();
// for(let color of colors) {
//     console.log(`My first favorite color is ${color}`);
// }
// //3
// let suffixes  = ['My 1st choice', 'My 2st choice', 'My 3st choice', 'My 4st choice', 'My 5st choice']

// //Exercise 3
// //1
// let askUse = prompt('Enter a number please');
// console.log(typeof askUse);
// //2
// do{
//     console.log(askUse);
//  } while(askUse < '/10');
 
// console.log(askUse);


//____________________________
// Extra training
//EX1
let people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);
console.log(people);
people.splice(2,1, 'Jason');
console.log(people);
people.push('Omer');
console.log(people);
console.log(people.indexOf("Mary"));
let peopleCopy = people.slice(1,3);
console.log(peopleCopy);
console.log(people.indexOf("Foo"));
//all words that are not IN the Array will bring -1 for NOT FOUNDED
let last = people.length -1;
console.log(last);

//PART II
for(let i = 0; i <= people.length; i++){
    console.log(people[i]);
}

for(let i = 0; i <= people.length; i++){
    console.log(people[i]);
    if(people[i] === 'Jason'){
        console.log('stops at Jason ' + people[i]);
        break;
    }
}
//EX2
let colors = ['Black', 'White', 'Brown', 'Grey', 'Yellow', 'Blue', 'Red'];
for(let i = 0; i < colors.length; i++){
    console.log(`My first favorite color is ${colors[0]},
                 My second favorite color is ${colors[1]},
                 My third favorite color is ${colors[2]},
                 My fourth favorite color is ${colors[3]},
                 My fifth favorite color is ${colors[4]},
                 My sixth favorite color is ${colors[5]},
                 My seventh favorite color is ${colors[6]}
                 `);
}

//EX3

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building['numberOfFloors']);
console.log(building['numberOfAptByFloor']['firstFloor'] + building['numberOfAptByFloor']['thirdFloor']);
console.log(`${building['nameOfTenants']['1']} ${building['numberOfRoomsAndRent']['dan']['0']}`);
if(building['numberOfRoomsAndRent']['sarah']['1'] + building['numberOfRoomsAndRent']['david']['1'] > building['numberOfRoomsAndRent']['dan']['1']){
    console.log(building['numberOfRoomsAndRent']['sarah']['1'] === 1200);
}
console.log(building['numberOfRoomsAndRent']['sarah']['1'] + building['numberOfRoomsAndRent']['david']['1']);

//EX5
let family = {
    dadNam : 'dad',
    momNam : 'mom',
    sisterNam : 'sister',
    broNam : 'brother',
}

for(i in family){
    console.log(family[i]);
}
for(i in family){
    console.log(i);
}

//EX6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  for(i in details){
    console.log(`My name is ${details['is']} the ${details['the']}`);
}

//EX7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretMessage = names.map((letter) => letter[0]).join('')
console.log(secretMessage);









