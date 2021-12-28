
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




