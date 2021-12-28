// let title = document.body.children;
// find the first child of the body
// find the child at position 0

//let parentTitle = title.parentNode;
//console.log(parentTitle);
//find the parent of the h1

//find the div
// let divElementNode = document.body.firstElementChild;
// find the children of div
// let childrenOfDiv = divElementNode.children;
// console.log(childrenOfDiv);


//first Exercise
// //1
// let divFirstWay = document.body.children[0];
// console.log(divFirstWay);
// let divSecondWay = document.body.firstElementChild;
// console.log(divSecondWay);
// //2
// let ulSecondWay = document.body.children[1];
// console.log(ulSecondWay);
// let ulFirstWay = document.body.firstElementChild.nextElementSibling;
// console.log(ulFirstWay);
// //3
// let firstLiMethod = document.body.children[1].lastElementChild;
// console.log(firstLiMethod);
// let secondLiMethod =  document.body.firstElementChild.nextElementSibling.lastElementChild;
// console.log(secondLiMethod);


// //------- PART II --------
 
// // ID
// let secondTitle = document.getElementById('titleTwo');
// console.log(secondTitle.nextElementSibling);

// // Class Name
// let allH1 = document.getElementsByClassName('title');
// console.log(allH1);

// //Tag name
// let allH1Tag = document.getElementsByTagName('title');
// console.log(allH1Tag);

// //querySelector #id
// let secondTitleQuery = document.querySelector('#titleTwo');
// console.log(secondTitleQuery);

// //find all the h3 that are inside div
// let divElementNode = document.body.firstElementChild;
// let allH3 = divElementNode.getElementsByTagName('h3');

// // find all h3 with the querySelector-All :
// let allH3Query = document.querySelectorAll('div h3');
// console.log(allH3Query);

// // Gives back a list
// let divInsidePage = document.getElementByTagName('div');
// console.log(divInsidePage[0]);

//Exercise 2
//1. two methods for the div node
let divClass = document.getElementById('container');
console.log(divClass);
let divQuery = document.querySelector('#container');
//2. two methods of ul nodes 
let ulClass = document.getElementsByClassName('list');
console.log(ulClass[0].children);
let ulQuery = document.querySelectorAll('.list')
console.log(ulQuery[0].children);
// 3.
for(let i = 0; i < ulClass.length; i++){
console.log(ulClass[0].firstElementChild);
}
for(let i = 0; i < ulQuery.length; i++) {
console.log(ulQuery[0].firstElementChild);
}


//Create a new element
//document.createElement('tag')
let newParagraph = document.createElement('p');

//2 create a text node
// document.createTextNode('Hello new somthing);
let newText = document.createTextNode('Hello my new Paragraph');

//3. append the text to the element
newParagraph.appendChild(newText);

let findDiv = 
findDiv.appendChild(newParagraph);
























