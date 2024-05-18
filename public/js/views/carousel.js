class Carousel{
slides = document.querySelectorAll('.slide');
nextBtn = document.querySelector('.next');
prevBtn = document.querySelector('.prev');
indicator = document.querySelector('.carousel__indicators');
currSlide = 0;
dots;
    initialize() {
    console.log(this.slides,this.nextBtn,this.prevBtn,this.indicator);
    this.indicator.innerHTML = '';
    this.slides.forEach((s, i) => {
        s.style.transform = `translateX(${i * 100}%)`;
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-curr_slide', i);
        this.indicator.appendChild(dot);
    })
    this.dots = document.querySelectorAll('.dot');
    addActive(this.currSlide);
    autoPlay(this.currSlide);

    }
    addHandler() {
        
        this.nextBtn.addEventListener('click', function () {
            this.currSlide++;
            this.moveSlide();
        })
        
        this.prevBtn.addEventListener('click', function () {
            this.currSlide--;
            this.moveSlide();
        })
    }

moveSlide() {
    if (this.currSlide < 0) {
        this.currSlide = this.slides.length-1;
    }
    if (this.currSlide >= this.slides.length) {
        this.currSlide = 0;
    }
    addActive()
    this.slides.forEach((s,i)=> {
        s.style.transform = `translateX(${(i - this.currSlide) * 100}%)`;
        
    })
    this.indicator.addEventListener('click', function (e) {
        if (!e.target.closest('.dot')) return;
        const dot = e.target.closest('.dot');
        this.currSlide = +dot.dataset.curr_slide;
        this.moveSlide();
    })
}



    addActive() {
    this.dots.forEach(dot => {
        if (dot.dataset.curr_slide == currSlide) {
            dot.classList.add('active');
        }
        else {
            dot.classList.remove('active');
        }
    });
}


    autoPlay() {
    setInterval(() => {
        this.currSlide++;
        this.moveSlide();
    }, 3000);
}
}

export default new Carousel();