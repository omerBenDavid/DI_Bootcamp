//LESSON

// NOT GOING TO USE
// function inform(){
// 	confirm('Do you want to play the game');
// }

// button.onclick = function(){
// 	console.log('Hello');
// }

// AddEventListener
// 1. retrieve the element
// let buttonNode = document.getElementById('btn');

// 2. Add the event listener
// element.addEventListener(call,callback function)

//  buttonNode.addEventListener('click', function(){
// 	 console.log("you clicked");
//  })

// to call the callback function we write the function without
// parentheses -> meaning we are calling the reference of the function
// buttonNode.addEventListener('click', informUser)

// function informUser () {
// 	console.log("You clicked");
// }

//Buttons
// let blueBtn = document.getElementById("btnBlue");
// let redBtn = document.getElementById('btnRed');

// btnRed.addEventListener('click', clickButton);
// btnRed.addEventListener('mouseover', hoverButton);
// btnBlue.addEventListener('mouseover', hoverButton);

// function clickButton(){
// 	console.log("you clicked RED button");
// }
// function hoverButton(){
// 	console.log("You hovered on thr BLUE button");
// }

//exercise
//not efficient
// let btnBlue = document.getElementById("btnBlue");
// let btnRed = document.getElementById("btnRed");

// btnBlue.addEventListener('click', clickButtonBlue);
// btnBlue.addEventListener('click', clickButtonRed);

// function clickButtonBlue (){
// 	document.body.style.backgroundColor = 'blue';
// }
// function clickButtonRed (){
// 	document.body.style.backgroundColor = 'red';
// }

//Exercise with Event Object
// let btnBlue = document.getElementById("btnBlue");
// let btnRed = document.getElementById("btnRed");

// btnBlue.addEventListener('click', clickButton);
// btnRed.addEventListener('click', clickButton);

// my point: I want the function to be reusable
//automatically when when we use the addEventListener, an event object is passes
////to the callback function
// function clickButton (event){
// 	console.log("event is", event);
// 	console.log('event target is : ', event.target);
// 	console.log('event target id', event.target.id);
// 	console.log('event textContent is', event.target.textContent);
// 	document.body.style.backgroundColor = event.target.textContent.toLowerCase();
// }

// Exercise 1
// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the back ground color of the page to red
// 3. the same for blue
// let btnRed = document.getElementById('btnRed');
// let btnBlue = document.getElementById("btnBlue");

// btnBlue.addEventListener("click", clickBtn);
// redBtn.addEventListener("click", clickBtn);
// function clickBtn(e){
// 	document.body.style.backgroundColor = e.target.textContent.toLowerCase();
// }

// Exercise 2
let colors = ["blue", "yellow", "green", "pink"];
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that
// changes the background color of the document,
// to the color of the button (do it directly in the JS)


// <button>BLUE</button>

let colors = ["blue", "yellow", "green", "pink"];

let divNode = document.getElementById("container");

//add the list of colors in the DOM 
for (let elem of colors){
    let newButton = document.createElement("button"); 
    let newText = document.createTextNode(elem.toUpperCase());
    newButton.setAttribute("id", `btn${elem}`);
    newButton.addEventListener("click", changeColorOfBg);
    newButton.appendChild(newText);
    divNode.appendChild(newButton);
}

//create a callback function for the addEventListener
function changeColorOfBg (e){
    // console.log("e is : ", e);
    // console.log("e.target is : ", e.target);
    let textOfButton = e.target.textContent;
    console.log("e.target.textContent is : ", e.target.textContent);
    let textOfButtonLower = textOfButton.toLowerCase();
    document.body.style.backgroundColor = textOfButtonLower;

    // the same in one line
    // document.body.style.backgroundColor = e.target.textContent.toLowerCase();
}

// when we use addEventListener, automatically an event object is created
// event object is an JS object that contains information about the event 
// that happened
// If we want to use this useful JS OBJECT, we need to retrieve it
// by passing a parameter into the callback function

// BEHIND THE SCENES
//when the user click on a button
//the function addEventListener will be called

// function addEventListener (){
//     let eventObj = {
//         type : "eventType";
//         target : "theTargetElement";
//     }

//     callbackFunction(eventObj)
// }


// function callbackFunction (e) {
//     console.log(e.type) -> "eventType";
// }













