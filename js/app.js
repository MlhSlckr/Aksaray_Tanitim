const menuOn = document.querySelector('.fa-bars');
const menuOff = document.querySelector('.fa-times');
const menu = document.querySelector('.Mobil-menu');
const darkOn = document.querySelector('.Mode');
const moon = document.querySelector('.Mode-moon');
const sun = document.querySelector('.Mode-sun');
const body = document.querySelector('body');

menuOn.addEventListener('click', () => {
  menu.classList.add('show');
  body.classList.add('hidden');
})

menuOff.addEventListener('click', () => {
  menu.classList.remove('show');
  body.classList.remove('hidden');

})

darkOn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    moon.classList.add('Off');
    sun.classList.add('On')
  } else {
    moon.classList.remove('Off');
    sun.classList.remove('On')
  }
})


const saat = new Date().getHours();
const dakika = new Date().getHours();
const saniye = new Date().getHours();
console.log(saat)