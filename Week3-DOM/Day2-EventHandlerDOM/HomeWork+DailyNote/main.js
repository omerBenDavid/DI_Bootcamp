//H.W
//ex 1

// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }// a will alert as number 5 because the var is only equal to 5

// //#2
// var a = 0;
// function q2() {
//     a = 5;
// }// a=0 global scope a=5local scope 

// function q22() {
//     alert(a);
// }//a=undefined


// //#3
// function q3() {
//     window.a = "hello";
// }//a=string of hello


// function q32() {
//     alert(a);
// }//a=undefined

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }//a=1 global scope a=string of test local scope

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }//a=number 5 cuse var is equal to the number five as close to the alert
// alert(a);

//ex2

//1 way
// let experiencePoints = function (winBattle)  { return true; } 
//2 way
// let experiencePoints = winBattle  => { return true; } 

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()

// ex 3
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// function isViolet() {
// for(let i =0; i < colors.length; i++){
//     if(colors[i] === 'Violet') {
//         console.log('This array includes the color: ' + colors[i]);
//         break;
//     }else{
//         console.log('its not..');
//     }
//   }
// }

// isViolet();

// let [color0, color1, color2, color3, color4, color5, color6, color7] =  ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// console.group('1# choice is :', color0, '2# choice is :', color1, '3# choice is :', color2, '4# choice is :', color3,'5# choice is :', color4, '6# choice is :', color5, '7# choice is :', color6, '8# choice is :', color7)


// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let [one, two, three, four, five, six, seven] = color;
// let ordinal = ["th","st","nd","rd"];
// console.log('1st choice is ', one, '2nd choice is ', 2, '3rd choice is ', 3, '4th choice is ', 4, 5, 6, 7, 'are my last loved colors');

// //5
// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// function isString(){
//     if(isString('hello')) {
//         return true;
//     }else if(isString([1, 2, 4, 0])) {
//         return false;
//     }
// }

//ex 6


//Daily challenge
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   

