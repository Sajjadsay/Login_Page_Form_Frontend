let wrapper = document.querySelector('.wrapper');
let loginlink = document.querySelector('.login-link');
let registerlink = document.querySelector('.register-link');
let loginbutton = document.querySelector('.btnlogin');
let closebutton = document.querySelector('.iconclose');


registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})

loginbutton.addEventListener('click',()=>{
    wrapper.classList.add('activebtnlogin');
})

closebutton.addEventListener('click',()=>{
    wrapper.classList.remove('activebtnlogin');
})

