const getInputvalueByID = id => {
    const inputFiled = document.getElementById(id)
    const inputFiledvalue = inputFiled.value;
    inputFiled.value = '';
    return inputFiledvalue;



}


const addProduct = () => {
    const product = getInputvalueByID('product-name');
    const quantity = getInputvalueByID('product-quntity');
    console.log(product, quantity);
}

