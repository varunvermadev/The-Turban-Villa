const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const indicator = document.querySelector('.carousel__indicators');
let currSlide = 0;
let dots;
function initialize() {
    indicator.innerHTML = '';
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${i * 100}%)`;
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-curr_slide', i);
        indicator.appendChild(dot);
    })
    dots = document.querySelectorAll('.dot');
    addActive(currSlide);
    autoPlay(currSlide);

}
initialize();
nextBtn.addEventListener('click', function () {
    currSlide++;
    moveSlide();
})

prevBtn.addEventListener('click', function () {
    currSlide--;
    moveSlide();
})

function moveSlide() {
    console.log(currSlide);
    if (currSlide < 0) {
        currSlide = slides.length-1;
    }
    if (currSlide >= slides.length) {
        currSlide = 0;
    }
    addActive()
    slides.forEach((s,i)=> {
        s.style.transform = `translateX(${(i - currSlide) * 100}%)`;
        
    })
}


indicator.addEventListener('click', function (e) {
    if (!e.target.closest('.dot')) return;
    const dot = e.target.closest('.dot');
    currSlide = +dot.dataset.curr_slide;
    moveSlide();
})

function addActive() {
    dots.forEach(dot => {
        if (dot.dataset.curr_slide == currSlide) {
            dot.classList.add('active');
        }
        else {
            dot.classList.remove('active');
        }
    });
}


function autoPlay() {
    setInterval(() => {
        currSlide++;
        moveSlide();
    }, 3000);
}