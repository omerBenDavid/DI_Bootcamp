//Exercise 4

const detailsMoney = [0.25, 0.10, 0.05, 0.01]

// function changeEnough(itemPrice, amountOfChange){
//     console.log('itemPrice : ', itemPrice);
//     console.log('itemPrice : ', amountOfChange);
//     for(let i = 0; i < amountOfChange.length; i++){
//         console.log('money is :', amountOfChange[i]);
//         console.log('worth is :', detailsMoney[i]);
//         let moneyWorth = amountOfChange[i]*detailsMoney[i];
//         console.log('moneyWorth is : ', moneyWorth);
//         sumMoney += moneyWorth;
//     }
//     console.log('the total money i have in my wallet is : ', moneyWorth);

//     if (sumMoney >= itemPrice){
//         return true;
//     }else {
//         return false;
//     }
// }

// changeEnough(5, [25, 20, 5, 0]);

let severalWords = prompt('Please right words separated by:  , ')
// severWord = Array.from(severalWords);
let arrayOfWords = severalWords.split(' ');
console.log(arrayOfWords);

function wordsFraming(){
for(let i = 0; i < arrayOfWords.length; i++){
   arrayOfWords.forEach(element => console.log(element.length));
   console.log(Math.max(arrayOfWords[i]));
   }
}
console.log(wordsFraming());

   
//length of the longest word
//making stars




