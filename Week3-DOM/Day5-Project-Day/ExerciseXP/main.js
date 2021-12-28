//switch(day)
//{
//  case 1:      //if day = 1
//  console.log("Monday");
//    break;
//  case 2:      //if day = 2
//    console.log("Tuesday");
//    break;

//Exercise 1

let lang = prompt('Hey! what is your language?');

switch(lang) {
    case 'French':
    console.log('Bonjour');
    break;
    case 'English':
    console.log("Hello");
    break;
    case 'Hebrew':
    console.log("Shalom");
    break;
    default:
        console.log("01110011 01101111 01110010 01110010 011110011");        
}

//Exercise 2
let grades = prompt('What is your grade?');

if(grades > 90) {
    console.log('A');
} else if(80 <= grades < 90) {
    console.log('B');
} else if(70 <= grades < 80) {
    console.log('C');
} else if( grades < 70) {
    console.log('D');
}

//Exercise 3
let users = prompt('Please enter a verb');

if (users.length > 3 && users != 'ing'){
console.log(users.concat('ing'));
} else if(users.length > 3 && users == 'ing') {
    console.log(users.concat('ly'));
} else if(users.length < 3) {
    console.log(users);
}

