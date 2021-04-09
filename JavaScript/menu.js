const menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let card1 = document.querySelector('.card1-circle');
let card2 = document.querySelector('.card2-circle');
let card3 = document.querySelector('.card3-circle');
let menuOpen = false ;
menuBtn.addEventListener('click',()=>{
  if(!menuOpen)
  {
    menuBtn.classList.add('open');
    menu.classList.add('active');
    menuOpen = true;
  }
  else
  {
    menuBtn.classList.remove('open');
    menu.classList.remove('active');
    menuOpen = false;
  }
});
