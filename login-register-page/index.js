const login = document.querySelector('.js-login');
const register = document.querySelector('.js-register');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const wrapper = document.querySelector('.wrapper');
const loginButton = document.querySelector('.login-btn');
const header = document.querySelector('.header');
const closeIcon = document.querySelector('.close-icon');
const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('.menu');
let isDrop = false;

register.addEventListener('click',()=>{
  wrapper.classList.add('change');
  loginForm.classList.add('login-inactive');
  registerForm.classList.add('register-active');
})
login.addEventListener('click',()=>{
  wrapper.classList.remove('change');
  loginForm.classList.remove('login-inactive');
  registerForm.classList.remove('register-active');
})
loginButton.addEventListener('click',()=>{
  wrapper.classList.add('active');
})
closeIcon.addEventListener('click',()=>{
  wrapper.classList.remove('active'); 
})
menu.addEventListener('click',()=>{
  if(!isDrop){
    dropdown.classList.add('show-dropdown');
    menu.innerHTML = `<i class="fa-solid fa-xmark fa-fade"></i>`;
    isDrop = true;
  }else{
    dropdown.classList.remove('show-dropdown');
    menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    isDrop = false;
  }
  
})