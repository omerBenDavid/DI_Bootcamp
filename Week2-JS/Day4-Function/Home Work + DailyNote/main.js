// //Exercise 4

// const detailsMoney = [0.25, 0.10, 0.05, 0.01]

// // function changeEnough(itemPrice, amountOfChange){
// //     console.log('itemPrice : ', itemPrice);
// //     console.log('itemPrice : ', amountOfChange);
// //     for(let i = 0; i < amountOfChange.length; i++){
// //         console.log('money is :', amountOfChange[i]);
// //         console.log('worth is :', detailsMoney[i]);
// //         let moneyWorth = amountOfChange[i]*detailsMoney[i];
// //         console.log('moneyWorth is : ', moneyWorth);
// //         sumMoney += moneyWorth;
// //     }
// //     console.log('the total money i have in my wallet is : ', moneyWorth);

// //     if (sumMoney >= itemPrice){
// //         return true;
// //     }else {
// //         return false;
// //     }
// // }

// // changeEnough(5, [25, 20, 5, 0]);

// let severalWords = prompt('Please right words separated by:  , ')
// // severWord = Array.from(severalWords);
// let arrayOfWords = severalWords.split(' ');
// console.log(arrayOfWords);

// function wordsFraming(){
// for(let i = 0; i < arrayOfWords.length; i++){
//    arrayOfWords.forEach(element => console.log(element.length));
//    console.log(Math.max(arrayOfWords[i]));
//    }
// }
// console.log(wordsFraming());

   
// //length of the longest word
// //making stars

// //Exercise 1
// // I
// // 1. 2. 3.
//  function infoAboutMe(name, age, hobbies){
//     return (`my name is ${name}, I am ${age} Years old, and I like ${hobbies}`);
//  }

// let info = infoAboutMe('omer', 27, 'coding');
// console.log(info);

// // II
// // 1. 2. 3.
// function infoAboutPerson(personName, personAge, personFavoriteColor){
//    return (`my name is ${personName}, I am ${personAge} Years old, and I like ${personFavoriteColor}`);
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

// // Exercise 2
// // 1. 2. 3. 4. 5.
// function calculateTip(){
//    let payment = prompt('what is the amount of the bill john?');
//    if (payment < 50){
//       return '20% tip';
//    } else if (50 <= payment <= 200){
//       return "15% tip";
//    }else if(payment > 200) {
//       return "10% tip";
//    }
  
// }
// console.log(calculateTip());
// let billTip = calculateTip();
// console.log(billTip);

// // Exercise 3
// // 1. 2. 3. 4. 5.

// // let text = ''
// // function isDivisible(){
// //    for(let i = 0; i <= 500; i++){
// //       text += 'The number is' + i;
// //    }
// //    return text;
// // }

// let text = ''
// function isDivisible(){
//    for(let i = 0; i <= 500; i++){
//       text += i;
//    } 
// }


// let num = isDivisible();
// console.log(num);

// //Exercise 4


// let stock = { 
//    "banana": 6, 
//    "apple": 0,
//    "pear": 12,
//    "orange": 32,
//    "blueberry":1
// }  

// let prices = {    
//    "banana": 4, 
//    "apple": 2, 
//    "pear": 1,
//    "orange": 1.5,
//    "blueberry":10
// } 

// let shoppingList = [' banana', 'orange', 'apple'];

// function myBill(){
//    for (let i = 0; i < shoppingList.length; i++){
//       if(i === shoppingList[i]){
//          return (`the price is ${prices[0] + prices[3] + prices[1]}`);
//       }else {
//          return ('the item is not exist');
//    }
//    }
// }

// console.log(myBill());


//_____________________
//Another Exercise training

//EX1
// function infoAboutMe(){
//    console.log(`My name is omer, I am 27 years old, and I like to listen to music`);
// }
// console.log(infoAboutMe());

// function infoAbout(name, age, favColor = 'white'){
//    console.log(`My name is ${name}, I am ${age} years old, and I like the color ${favColor}`);
// }
// console.log(infoAbout('omer', '27'));

//EX2
// function calculateTip(){
//    let askJohn = prompt('what is the amount of the bill?');
//    if (askJohn < 50){
//       return (askJohn*0.2 + ' 20%');
//    }else if(askJohn > 50 && askJohn < 200){
//       return (askJohn*0.15 + ' 15$');
//    } else if(askJohn > 200){
//       return (askJohn*0.1 + ' 10%') ;
//    }
// }
// console.log(calculateTip());
// Works great

//EX3

// function isDivisible(){
//    let sum = 0;
//    for(let i = 0; i <= 500; i++){
//       if (i % 23 == 0) {
//          console.log('Number ' + i);
//          sum += i;
//       }
//    }
//    console.log('Sum ' + sum);
//  }
// isDivisible();

// let kaki = isDivisible;
// kaki();

// function isDivisible(){
//    let sum = 0;
//    for(let i = 0; i <= 500; i++){
//       if(i % 23 == 1){
//          console.log('number ' + i);
//          sum += i;
//       }
//    }
//    console.log("Sum " + sum);
// }
// isDivisible();

 
//EX4
let stock = { 
   "banana": 6, 
   "apple": 0,
   "pear": 12,
   "orange": 32,
   "blueberry":1
}  

let prices = {    
   "banana": 4, 
   "apple": 2, 
   "pear": 1,
   "orange": 1.5,
   "blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple'];

// function myBill(){
//    for(let x = 0; x < shoppingList.length; x++){
//       console.log(shoppingList[x]);
//    }
// }
// myBill();
let checkVal = ' ';
function myBill() {
   for (let x = 0; x < shoppingList.length; x++){
      console.log(shoppingList[x]);
      checkVal = shoppingList[x];
      for(let y  = 0; y < prices.length; y++){
      if (checkVal === prices[y]) {
         console.log('Exist');
      } else {
         console.log('Do Not Exist');
      }
    }
   }
   return checkVal; 
}
myBill();





// let people = ["Greg", "Mary", "Devon", "James"];

// for(let i = 0; i <= people.length; i++){
//     console.log(people[i]);
// }

// for(let i = 0; i <= people.length; i++){
//     console.log(people[i]);
//     if(people[i] === 'Jason'){
//         console.log('stops at Jason ' + people[i]);
//         break;
//     }
// }
// //EX2
// let colors = ['Black', 'White', 'Brown', 'Grey', 'Yellow', 'Blue', 'Red'];
// for(let i = 0; i < colors.length; i++){
//     console.log(`My first favorite color is ${colors[0]},
//                  My second favorite color is ${colors[1]},
//                  My third favorite color is ${colors[2]},
//                  My fourth favorite color is ${colors[3]},
//                  My fifth favorite color is ${colors[4]},
//                  My sixth favorite color is ${colors[5]},
//                  My seventh favorite color is ${colors[6]}
//                  `);
// }

// //EX3

// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }

// console.log(building['numberOfFloors']);
// console.log(building['numberOfAptByFloor']['firstFloor'] + building['numberOfAptByFloor']['thirdFloor']);
// console.log(`${building['nameOfTenants']['1']} ${building['numberOfRoomsAndRent']['dan']['0']}`);
// if(building['numberOfRoomsAndRent']['sarah']['1'] + building['numberOfRoomsAndRent']['david']['1'] > building['numberOfRoomsAndRent']['dan']['1']){
//     console.log(building['numberOfRoomsAndRent']['sarah']['1'] === 1200);
// }
// console.log(building['numberOfRoomsAndRent']['sarah']['1'] + building['numberOfRoomsAndRent']['david']['1']);



















