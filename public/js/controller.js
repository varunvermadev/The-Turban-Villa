import * as model from './model'
import featuresView from './views/featuresView';
import './views/carousel';
import './views/hamburger'

async function controlModelData() {
    await model.getData();
    featuresView.render(model.state.categories);
}

controlModelData();