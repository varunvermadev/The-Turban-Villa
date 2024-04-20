class FeatureView {

    parentEl = document.querySelector('.categories__container');
    data;

    render(data) {
        this.data = data;
        const markup = this.data.map(category => {
            const path = category.categoryImg + category.categoryName.toLowerCase().split(' ').join('_') + '.jpg';
            return `<div class="card">
        <img src="${path}" >
        <div class="card__desc">



          <span>${category.categoryName}</span>
          <h4 class="card__price">${category.categoryPrice}</h4>
          <button class="btn btn__explore">
            Explore
          </button>
        </div>

      </div>`
        }).join('');

        this.#clear();

        this.parentEl.insertAdjacentHTML('afterbegin', markup);
        
    }

    #clear() {
        this.parentEl.innerHTML = '';
    }
}

export default new FeatureView();