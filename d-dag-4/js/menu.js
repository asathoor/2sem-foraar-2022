/**
 * file: menu.js
 **/

let hide = true; // global

// hide or show
let hideShow = function(){

  if (hide == true) {
    document.getElementById('showBrg').style.display = 'block';
    hide = false;
  } else {
    document.getElementById('showBrg').style.display = 'none';
    hide = true;
  }

}

// detect click
burger.addEventListener('click', hideShow);
