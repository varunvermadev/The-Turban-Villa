// taking data and sending it to the  controller

export  const state = {
    categories: []
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



