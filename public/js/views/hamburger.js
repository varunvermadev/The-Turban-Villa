const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('#header .list');
hamburger.addEventListener('click', function (e) {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
})