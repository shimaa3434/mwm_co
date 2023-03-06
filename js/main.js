window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
});

// toggle menu button
const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn= document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex';
    openBtn.style.display= 'none';
    closeBtn.style.display= 'inline-block';
});

closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    openBtn.style.display= 'inline-block';
    closeBtn.style.display= 'none';
});

const options = {animationDuration: 0.5,};

const filterizr = new Filterizr('.filter-container', options);