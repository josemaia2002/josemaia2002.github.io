const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/sad-cat.jpg') {
    myImage.setAttribute('src','images/happy-cat.jpg');
  } else {
    myImage.setAttribute('src','images/sad-cat.jpg');
  }
}

let myButton = document.querySelector('#user_btn');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}


if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Hello, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}

function changeTheme() {
  const theme = document.querySelector('body');
  const themeStyles = window.getComputedStyle(theme);

  if(themeStyles.getPropertyValue('background-color') == 'rgb(255, 255, 255)'){
    theme.style.backgroundColor = 'rgb(0, 0, 0)';
    theme.style.color = 'rgb(255, 255, 255)';
  }
  else{
    theme.style.backgroundColor = 'rgb(255, 255, 255)';
    theme.style.color = 'rgb(0, 0, 0)';
  }

}

const darkThemeButton = document.querySelector('#btn');

darkThemeButton.addEventListener('click', changeTheme);