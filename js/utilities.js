// function for get input value
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

// function for get money from cart section
const getMoney = (id) => {
    const moneyField = document.getElementById(id);
    const money = parseFloat(moneyField.innerText);
    return money;
}

const setMoney = (id, totalMoney) => {
    const moneyField = document.getElementById(id);
    moneyField.innerText = totalMoney;
}