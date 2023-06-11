const getInputvalueByID = id => {
    const inputFiled = document.getElementById(id)
    const inputFiledvalue = inputFiled.value;
    inputFiled.value = '';
    return inputFiledvalue;



}


const addProduct = () => {
    const product = getInputvalueByID('product-name');
    const quantity = getInputvalueByID('product-quntity');
    displayDataShow(product, quantity);
    console.log(product, quantity);


    //add to local storage 

    //simple way

    localStorage.setItem(product, quantity);
    seveItemToLocalStorage(product, quantity);


}
const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart;
}


const seveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    //add product to the object as property
    cart[product] = quantity;
    const carStringified = JSON.stringify(cart);
    localStorage.setItem('cart', carStringified);

}


const displayDataShow = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = ` ${product} : ${quantity}
    `;
    productContainer.appendChild(li);
};

const displayStoredProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        displayDataShow(product, quantity);
    }
}

displayStoredProducts();
