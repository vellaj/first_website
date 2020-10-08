
let myImage = document.querySelector('img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/strawberry.png') {
        myImage.setAttribute('src','images/watermelon.png')
    } else {
        myImage.setAttribute('src','images/strawberry.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
}

function setUserName(){
    let myName = prompt('Please enter your name!');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name',myName)
    myHeading.textContent = 'Tastes Like Strawberries, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Tastes Like Strawberries, ' + storedName;
}
