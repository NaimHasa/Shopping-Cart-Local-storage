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


}
const displayDataShow = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = ` ${product} : ${quantity}
    `;
    productContainer.appendChild(li);
}

