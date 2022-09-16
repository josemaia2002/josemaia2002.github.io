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