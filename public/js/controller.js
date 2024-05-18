import * as model from './model';
import appView from './views/appView'; 
import featuresView from './views/featuresView';
import productView from './views/productView';

async function loadApp() {
    await model.getData();
    console.log(model.state);
    appView.render(model.state.markup.home,'home');
    featuresView.parentEl = document.querySelector('.categories__container'); 
    controlApp();
    featuresView.render(model.state.categories);
}

async function controlPage() {
    const el = window.location.hash.slice(1);
    if (el == 'home') {
        appView.render(model.state.markup.home,'home');
        featuresView.parentEl = document.querySelector('.categories__container'); 
        featuresView.render(model.state.categories);
    }
    
    if (el == 'aboutus') {
        appView.render(model.state.markup.aboutus,'aboutus');
    }
    controlApp();
}
async function controlFeatures(e) {
    console.log(e);
    const btn = e.target.closest('.btn__explore');
    console.log(btn);
    if (!btn) return;
    controlProducts(btn.dataset.category);
    controlApp();
}
async function controlProducts(category) {
    window.scrollTo(0, 0);
    productView.renderProducts(category);
    controlApp();
}

async function controlApp() {
    appView.addHandlerPage(controlPage);
    featuresView.addHandlerFeatures(controlFeatures);
}

loadApp();