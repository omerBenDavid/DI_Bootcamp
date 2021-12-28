//HomeWork
//I create new div element and append all the old div element to the new div:
//call the elem by old id
// let oldNav = document.getElementById('navBar');
// //Create Elem
// let newNav = document.createElement('div');
// //create ul var
// let navList = document.querySelector('ul');
// //Add id
// newNav.id = 'socialNetworkNavigation';
// // new text node
// newNav.appendChild(navList);
// // call the parent
// const parent = document.querySelector('body');
// parent.replaceChild(newNav, oldNav);

// console.log(newNav);

// //ex1
// let nav = document.getElementById('navBar');
// nav.setAttribute('id', 'socialNetworkNavigation');
// //create li element
// let newLi = document.createElement('li');
// //append to li a text node
// //long way:
// // let text = document.createTextNode('Logout');
// // newLi.appendChild(text);
// //shortCut:
//  newLi.appendChild(document.createTextNode('Logout'));
// // create new link element
// let link = document.createElement('a');
// // get href for a tag
// link.getAttribute('href');
// link.setAttribute('href', '#');
// // add class
// newLi.appendChild(link);
// //call ul and append li to it
// document.querySelector('ul').appendChild(newLi);

// let uls = document.querySelector('ul');

// console.log(nav);
// //3 Bonus 
// console.log(uls.firstElementChild.textContent);
// console.log(uls.lastElementChild.textContent);

//ex2
// let val;
// let ulNames = document.querySelector('.list');
// val = ulNames.children;
// val = ulNames.children[1];
// val = ulNames.children[1].textContent = 'Richard';
// // let uls = document.querySelector('.list');
// // val = uls.children[0].textContent = 'Omer';
// let uls = document.querySelector('.list');
// uls.children[0].textContent = 'Omer';
// let studentLi = document.createElement('li');
// studentLi.appendChild(document.createTextNode('Hey Students'));
//  uls.appendChild(studentLi);

// console.log(val);

//ex3
// let divs = document.querySelector('div');
// divs.style.backgroundColor = 'blue';
// let uls = document.querySelector('ul');
// uls.lastElementChild.innerHTML = '';
// uls.firstElementChild.style.border = 'solid';
// document.body.style.fontSize = '25px';

// //bonus
// if(divs.style.backgroundColor === 'blue'){
//     console.log('Hello X and Y');
// }

//4

let planetArr = ['moon', 'mars', 'pluto'];

    let divMoon = document.createElement('div').className = 'planet';
    let divMars = document.createElement('div').className = 'planet';
    let divPluto = document.createElement('div').className = 'planet';
       
        divMoon.appendChild(planetArr[0]);
        divMars.appendChild(planetArr[1]);
        divPluto.appendChild(planetArr[2]);
      
        console.log(`${divMoon}, ${divMars}, ${divPluto}`);  
     
        divMoon.className = 'closePlanet';
        divMars.className = 'mediumPlanet';
        divPluto.className = 'farPlanet';

        divMoon.style.background = 'blue';
        divMars.style.backgroundColor = 'red';
        divPluto.style.backgroundColor = 'brown';

        document.body.appendChild(divMoon);
        document.body.appendChild(divMars);
        document.body.appendChild(divPluto);








