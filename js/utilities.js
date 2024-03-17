const getInputValue = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';

    if(inputAmount < 0 || isNaN(inputAmount)){
        alert('please give valid number');
        return;
    }
    
    return inputAmount;
}