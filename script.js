const menu=document.querySelector('.hamburger');
const navLinks=document.querySelector('.navbar-2-links');

menu.addEventListener('click',()=>{
    navLinks.classList.toggle('navbar-2-links-active');
    navLinks.classList.add('col-12')
    menu.classList.remove('navbar-2-links');
});

