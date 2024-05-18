// taking data and sending it to the  controller

export  const state = {
    categories: [],
    markup : {}
}

export const getData = async function () {
    const res = await fetch('../data/data.json');
    const data = await res.json();
    data.categories.forEach(el => {
        state.categories.push({
            categoryName: el.categoryName,
            categoryPrice: `${el.price.lower}rs - ${el.price.upper}rs`,
            categoryImg: el.coverImg
        })
    });

}

const getPage = async function (page = 'home') {
    
    const res = await fetch('../../templates/'+page+'.html');
    const markup = await res.text();
    state.markup[page] = markup;
}


const pages = ['home', 'aboutus', 'product'];
pages.forEach(el => {
    getPage(el);
})


