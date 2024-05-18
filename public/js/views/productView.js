class ProductView{
    parentEl = document.querySelector('#app');
    categories =[{
        category: 'fifty',
        products : 3
    },
    {
        category: 'fullvoile',
        products : 80
    },
    {
        category: 'cparna',
        products : 4
    },
    {
        category: 'dumalla',
        products : 11
    },
    {
        category: 'parna',
        products : 55
    },
    {
        category: 'patka',
        products : 4
    },
    {
        category: 'rubia',
        products : 17
    }]

    async renderProducts(data) {
        const n = this.categories.find(el => el.category == data);
        console.log(n);
        let arr = [];
        if (!n) {
            this.parentEl.innerHTML = '';
            this.parentEl.insertAdjacentHTML('beforeend', '<h3>New Products Coming Soon....</h3>');
            return;
        }
        for (let i = 1; i <= n.products; i++){
            arr.push(`./public/assets/${data}/${data} (${i}).jpeg`);
        }
        const markup = `<header id="header">
    <nav class="navbar">
        <div class="brand">
            <div class="brand__logo">
                <img src="./assets/logo.png" alt="">
            </div>
            <div class="brand__name">
                <p>The <span>Turban</span> Villa</p>
            </div>
        </div>
        <ul class="list">
            <a href="#home" class="list__links active">
                <li class="list__items ">Home</li>
            </a>
            <a href="#aboutus" class="list__links">
                <li class="list__items ">About Us</li>
            </a>
            <a href="#categories" class="list__links products">
                <li class="list__items ">Products</li>
            </a>
            <a href="https://wa.me/message/FGSUJKSJWXK5E1" class="list__links" target="_blank">
                <li class="list__items">Contact</li>
            </a>
        </ul>
        <div class="hamburger ">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
    </nav>
</header>
<section class="products" id="products">
    <h2 class="primary__heading">${data.toUpperCase()}</h2>
    <div class="grid">
    ${arr.map(el=>`<img src="${el}">`).join('')}
    </div>
</section>
<footer class="footer" id="footer">
    <div class="footer__brand">
        <div class="footer__name">
            <h2>The <span>Turban</span> Villa</h2>
        </div>
        <div class="footer__logo">
            <img src="./public/assets/logo.png" alt="">
        </div>
    </div>
    <div class="footer__wrapper">
        <div class="contact">
            <h4 class="heading__tertiary"><b>Contact</b></h4>
            <p class="contact__address">
                <b>Address : </b>Railway Road, Opposite Ramlal Halwai, Jagraon
            </p>
            <p class="contact__phone">
                <b>Phone : </b> +919877337840
            </p>
        </div>
        <div class="footer__socials">
            <ul>
                <li> <b>Reach Us At </b> </li>
                <a href="https://www.instagram.com/turbanvilla?igsh=a3ZzZTBibG9mYTBx&utm_source=qr" target="_blank">
                    <li><i class=" fa-brands fa-instagram"></i><b>Instagram</b></li>
                </a>
                <a href="https://wa.me/message/FGSUJKSJWXK5E1" target="_blank">
                    <li><i class=" fa-brands fa-whatsapp"></i><b>Whatsapp</b></li>
                </a>
            </ul>
        </div>

        <!-- <div class="footer__about">
        <h4 class="heading__tertiary">About</h4>
        
      </div> -->

        <!-- <div class="footer__myaccount">
        <h4 class="heading__tertiary">My Account</h4>
        <p class="footer__mycart">
          View Cart
        </p>
        <p>
          My Wishlist
        </p>
      </div> -->
    </div>
</footer>`
        this.parentEl.innerHTML = '';
        this.parentEl.insertAdjacentHTML('beforeend', markup);
    }

}

export default new ProductView();