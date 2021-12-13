// --------- PART I -----------

//array : list 


let shopping = ['shampoo', ['chocolate', 'vanilla'], ['paper', 'pen']];

//change the value of an element inside an array
shopping[0] = 'computer';

//object
//key : value pair
// key : value pair
//{
//    key : value,
//    key : value,
//    key : value,
//}

let shoppingObj = {
    apple: 2,
    pears: 4,
    banana: 5,
    isShampooAvailable: true,
    userNameBuyer: "john",
    coupons:   ['125', '145'],
};

console.log(shoppingObj);

//objectName.propertyName
console.log('how many apples i need to buy', shoppingObj.apple);

//objectName['propertyName]
console.log('how many apples i need to buy', shoppingObj['apple']);

//value of the second coupon
console.log(shoppingObj['coupons']);

//change the value of the key
shoppingObj['userNameBuyer'] = 'Thomas';
console.log(shoppingObj);

//add a new key: value pair
shoppingObj['lastNameBuyer'] = 'Smith';
console.log(shoppingObj);


let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};
// 1. Add the lastName Smith to the object
// 2. Change the price of the pear, so it will contain the Taxes. 17%
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

//1
userCart['lastName'] = 'Ben david';
console.log(userCart);
//2
userCart['prices']['pear'] *=  1.17;
console.log(userCart);
//3
let choosing = prompt('please choose between: Banana, apple, pears').toLowerCase();
console.log(choosing);
//4
let priceOrSpecificFruit = userCart['prices'][choosing];

console.log('priceOrSpecificFruit :', priceOrSpecificFruit);
console.log(`The price for a ${choosing} is ${priceOrSpecificFruit}`);

// ----- Part 2 -----

//Conditionals
//if i had money, i would buy a car

// if (condition is true) {
//     //WE do somthing
// } else {
// //We do somthing else
// }

//1 try
// let bankAmount = 2000;
// let farmAnimals = ['cow', 'horse'];
// let priceAnimal = 200;

// if(bankAmount > priceAnimal){
//     console.log('i bought the farm animal');
//     bankAmount -= priceAnimal;
//     farmAnimals.push('pig');console.log(bankAmount, farmAnimals);
// } else {
//     console.log('ill buy a bicycle')
// }

// console.log('Out if the condition');


//2 try
// let bankAmount = 2000;
// let farmAnimals = ['cow', 'horse'];
// let priceAnimal = 200;
// let machinePrice = 1000;
// let priceCandy = 2;

// if (bankAmount >= machinePrice) {
//     console.log('i bought the machine');
//     bankAmount -= machinePrice;
//     console.log(v=bankAmount);    
// } else if (bankAmount >= priceAnimal) {
//     console.log('i bought the new animal');
//     bankAmount -= priceAnimal;
//     farmAnimals.push('pig');
//     console.log(bankAmount, farmAnimals);
// } else {
//     console.log('i couldnt buy anything');
// }
// console.log('get out of the condition');

// AND and OR

// let johnAge = 14;
// let johnHeight = 160;

// let minAge = 12;
// let minHeight = 1.40;

// //&&
// //both conditions need to be true
// if (johnAge >= minAge && johnHeight >= minHeight) {
//     console.log("john will go to the rollercoaster");
// } else {
//     console.log("john will stay at home"); 

// }

// let johnAge = 10;
// let johnHeight = 160;

// let minAge = 12;
// let minHeight = 1.40;

// //||
// //both conditions need to be true
// if (johnAge >= minAge || johnHeight >= minHeight) {
//     console.log("john will go to the rollercoaster");
// } else {
//     console.log("john will stay at home"); 

// }

// let johnAge = 10;
// let johnHeight = 160;

// let minAge = 12;
// let minHeight = 1.40;

// let fakeID = true;

// //condition
// //both conditions need to be true
// if ((johnAge >= minAge && johnHeight >= minHeight) || fakeID) {
//     console.log("john will go to the rollercoaster");
// } else {
//     console.log("john will stay at home"); 

// }

let johnTall = true;

if(johnTall) {
    console.log("He will enter the rollercoaster");
} else if(!johnTall){
    console.log('He will not enter the rollercoaster');
}



// // Exercise if else

let userCarts = {
	username : "Johnny",
	password: 12345,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

//2nd Exercise
//1.  If the user is SignedIn - show him his name and password
// //2. If not - alert the user "you need to sign in"
// if (userCarts['isUserSignedIn']) {
//     console.log(`Your username is ${userCarts['username']} and password is ${username['password']}`);
// } else {
//     console.log('you need to sign in');
// }
//3rd exercise
//1. If the user is Johnny AND his password is 12345 - alert him "You are signed in"
//2. If the user is Johnny OR his password is 12345 - alert him "One credential is false"
//3. Else,alert the user "you need to sign in
if (userCarts['username'] == 'Johnny' && userCarts['password'] == 12345) {
    console.log('You are signed in');
} else if(username == 'Johnny' || password == 12345) {
    alert('One credential is false');
} else {
    alert('you need to sign in');
}

// Home Work!
// Exercise 1
//1
let x = 2;
let y = 5;
//2
if(x >= y){
    console.log('This is not reality!')
}else{
    alert('x is not bigger then y');
}
// Exercise 2
//1
let newDog = 'Chihuahua';
//2
console.log(`${newDog} ${newDog.length}`);
//3
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
//4
if(newDog === 'Chihuahua') {
    console.log('i love Chihuahua')
} else {
    console.log('i dont care, i prefer cats');
}
//Exercise 3
//1
let useNum = prompt('Please Enter an X number');
//2
if(useNum % 2 == 0){
    console.log(`X is an even number and its outcome is ${useNum}`);
} else if(useNum % 2 == 1) {
    console.log('X is an odd number');
}
//Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0){
    console.log('no one online');
} else if(users.length == 1){
    console.log(`users that connected: ${users}`);
} else if(users.length == 2) {
    console.log(`the 2 users are ${users[1]} And ${users[2]}`)
} else{
    console.log(`first user is ${users[1]} And ${users[2]} and 3 more online`)
}

//Daily Challenge
let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.search('not');
let wordBad = sentence.search('bad');

if(wordNot < wordBad) {
    document.getElementById("text").innerHTML = 'The movie is good, I like it!';
    console.log('The movie is good, I like it!');
}




