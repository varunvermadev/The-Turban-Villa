class FeatureView {
    parentEl;
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
          <button href='#top' data-category="${category.categoryName.toLowerCase().split(' ').join('')}" class="btn btn__explore">
            Explore
          </button>
        </div>

      </div>`
        }).join('');

        this.#clear();

        this.parentEl.insertAdjacentHTML('afterbegin', markup);
        
  }
  
  addHandlerFeatures(handler) {
    this.parentEl.addEventListener('click', handler);
  }

    #clear() {
        this.parentEl.innerHTML = '';
    }
}

export default new FeatureView();