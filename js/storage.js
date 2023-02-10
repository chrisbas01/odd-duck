'use strict'


function setProducts(state) {
    let data = JSON.stringify(state);
    localStorage.setItem('product', data);
    console.log('products saved!', localStorage)
}


function getProducts() {
    let stringData = localStorage.getItem('product')
    console.log('getting products!', localStorage)
    return JSON.parse(stringData)
}

//*clears data
function removeProducts() {
    localStorage.clear();
}