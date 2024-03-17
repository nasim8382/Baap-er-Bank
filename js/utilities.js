// function for get input value
const getInputValue = (inputId) => {
    const inputField = document.getElementById(inputId);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';

    // checking valid input number
    if(inputAmount < 0 || isNaN(inputAmount)){
        alert('please give valid number');
        return;
    }
    return inputAmount;
}

// function for get money from cart section
const getMoney = (elementId) => {
    const money = parseFloat(document.getElementById(elementId).innerText);
    return money;
}

// function for set money from cart section
const setMoney = (elementId, totalMoney) => {
    const moneyField = document.getElementById(elementId);
    moneyField.innerText = totalMoney;
}