document.getElementById('withdraw-btn').addEventListener('click', () => {
    // get input field value (new withdraw)
    const newWithdraw = getInputValue('withdraw-field');
    
    // get previous withdraw amount
    const previousWithdraw = getMoney('withdraw-money');

    // get previous main balance
    const previousTotalBalance = getMoney('total-balance');

    // check withdraw balance is less than main balance
    if(newWithdraw > previousTotalBalance){
        alert('Baap er bank a eto taka nai');
        return;
    }

    // subtraction of new and previous withdraw amount
    const totalWithdraw = newWithdraw + previousWithdraw;
    
    // set withdraw update amount
    setMoney('withdraw-money', totalWithdraw);

    // new main balance
    const newTotalBalance = previousTotalBalance - newWithdraw;

    // set update main balance
    setMoney('total-balance', newTotalBalance);
})