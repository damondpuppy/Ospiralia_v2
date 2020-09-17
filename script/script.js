const burgerButton = document.querySelector('#burger-button');
const menu = document.querySelector('#nav_right');

burgerButton.addEventListener('click', click_function);

function click_function() {

  if(menu.classList.contains('is-active')){

    menu.classList.remove('is-active');

  }else{
    menu.classList.add('is-active');
  }

}
/*--------------------------------------------------------------------*/

const button_1 = document.querySelector('#button_1');
const button_2 = document.querySelector('#button_2');
const ruleta = document.querySelector('#ruleta_js');

button_1.addEventListener('click', left_button_function);
button_2.addEventListener('click', right_button_function);


function left_button_function() {

    ruleta.classList.remove('is-right');
    ruleta.classList.add('is-left');

}
function right_button_function() {

    ruleta.classList.remove('is-left');
    ruleta.classList.add('is-right');

}
