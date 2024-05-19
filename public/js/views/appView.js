class AppView {
    parentEl = document.getElementById('app');
    async render(markup,page) {
        this.parentEl.innerHTML = '';
        this.parentEl.insertAdjacentHTML('beforeend', markup); 
        if (page == 'home')
            this.carousel();
        this.hamburger();
    }

    carousel() {
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
    }
    hamburger() {
        const hamburger = document.querySelector('.hamburger');
        const navList = document.querySelector('#header .list');
        hamburger.addEventListener('click', function (e) {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    })
    }

    addHandlerPage(handler) {
        window.addEventListener('hashchange', handler);
    }

};
export default new AppView();
