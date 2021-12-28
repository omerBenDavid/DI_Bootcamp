// Homework of today
// The exercises on curring and composing are not mandatory because we havn't gone over those notions yet
// Do the XP gold as it used nested functions that we learned today

//ex1
const numberSums = ((a ,b) => a + b);
console.log(numberSums(10, 20));

// function numberSum(a = 2, b = 3) {
//     console.log(a + b);
// }

// numberSum();

// let a = 2;
// let b = 3;

// function numberSum() {
//     console.log(a + b);
// }

// numberSum();

//  const numberSum = ((a ,b) => a + b);
//  const numberDiv = ((a, b) => a / b);


// console.log(numberSum(2, 3));
// console.log(numberDiv(10, 2));

// () => console.log('Hello');

// (function() {
//     alert('Hello ' + name)
// })('OMER');

// button.addEventListener('click', function(){
//     console.log('hello');
// });

// function loopFunk(a, b){
// if(a >= b) { 
//   console.log(a, b);
//  }
// }

// loopFunk(10, 5);

// let i = 0;
// let x = [1, 2, 3, 4];

// function numberRun(){
//     for(; i < x.length; i++){
//         console.log(x[i]);
//     }
// }

// numberRun();

const loopFunk = ((a, b)  => console.log(a, b))

loopFunk(10, 5);

// const domFunk = ()  => {
//     //create element
//     let li = document.createElement('li');
//     //add attribute
//     li.setAttribute('title', 'New Title');
//     //create and append text node
//     li.appendChild(document.createTextNode('Hello World'));
//     //create new link
//     const link = document.createElement('a');
//     // add class
//     link.className = 'delete-item';
//     // add HTML icon
//     link.innerHTML = '<i class=fa fa-remove';
//     //append link to li
//     li.appendChild(link);
//     //Append li to body 
//     document.body.appendChild(li);
// }

// domFunk();

(function () {
    //create element
    let li = document.createElement('li');
    //add attribute
    li.setAttribute('title', 'New Title');
    //create and append text node
    li.appendChild(document.createTextNode('Hey there my name is Omer!'));
    //create new link
    const link = document.createElement('a');
    // add class
    link.className = 'delete-item';
    // add HTML icon
    link.innerHTML = '<i class=fa fa-remove';
    //append link to li
    li.appendChild(link);
    //Append li to body 
    document.body.appendChild(li);
})();


let ABC = (a, b) => console.log(a = b);

ABC(1, 4);


// ANONYMOUS FUNCTION

// function (){
//     console.log('hello');
// }

// () => console.log('hello');

// (function(){
//     alert('Hello' + name);
// })('Sara');


// SCOPE AND VARIABLES

// button.addEventListener('click', function(){
//     alert('You clicked');
// })


// initialize the DOM
// (function () {
//     console.log("in the self invoking func")
//     let btnFirst = document.getElementById("first");
//     let btnSecond = document.getElementById("second");
//     btnFirst.addEventListener("click", () => alert("you clicked the btn"))
//     btnSecond.addEventListener("mouseover", () => alert("you hovered over the btn"))
//   })();

// THE NESTED (INNER) FUNCTION IS PRIVATE TO ITS CONTAINING (OUTER) FUNCTION.

// function outer() {
//     let test = 'test';
//     function inner(){
//         let username = 'Tom';
//         document.body.textContent = username;
//         test += 'function';
//         console.log(test);
//     }

//    // console.log(username); // not defined
//     inner();
// }

// outer();
// inner() not defined

// S C O P E
// let name  = 'john';
// // the outer func : checkName( ) is going to be ran once
// // the inner func, addExclamation() is going to run 3 times
// function checkName(){
//     let nameUppercase = name.upperCase();

//     function addExclamation(){
//         nameUppercase += '!';
//         console.log('In the addExclamation func name is :', nameUppercase);
//     };
//     addExclamation();
// }




// const companies = [
//     {name: 'company One', category: 'finance', start: 1981, end: 2003},
//     {name: 'company two', category: 'retail', start: 1992, end: 2008},
//     {name: 'company three', category: 'auto', start: 1999, end: 2007},
//     {name: 'company four', category: 'retail', start: 1989, end: 2010},
//     {name: 'company five', category: 'technology', start: 2009, end: 2014},
//     {name: 'company six', category: 'finance', start: 1987, end: 2010},
//     {name: 'company seven', category: 'auto', start: 1986, end: 1996},
//     {name: 'company eight', category: 'technology', start: 12011981, end: 2016},
//     {name: 'company nine', category: 'retail', start: 1981, end: 1989},
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//for -
// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// forEach

// companies.forEach(function(company){
//     // console.log(company);
//     console.log(company.name);
// });

// filter
//for -
// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// const canDrink = ages.filter(age => age >= 21);

//filter retail companies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'retail') {
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === 'retail');

// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(company => (company.start >= 
//     1980 && company.start < 1990));

//     console.log(eightiesCompanies);

// Get companies that lasted 10years or more

// const lastedTenYears = companies.filter(company => (company.end -
//     company.start >= 10 ));

//     console.log(lastedTenYears);

// map
//create array of companies name
// const companyName = company.map(function(company){
//     return company.name;
// });

// const companyName = company.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const companyName = company.map(company => `${company.name} 
// [${company.start} - ${company.end}]`);

// const agesSquare = ages.map(age => Math.sqrt(age));
// const agesTimeTwo = ages.map(age => age * 2);

// console.log(agesSquare);

// sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// // sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// reduce

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// });

// const ageSum = ages.reduce((total, age) => total + age, 0);

// // total years of all companies

// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// },0);

// const totalYears = companies.reduce((total, company) => total + 
// (company.end - company.start),0);

// console.log(ageSum);















