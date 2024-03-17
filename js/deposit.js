document.getElementById('deposit-btn').addEventListener('click', () => {
    // get input field value (new deposit)
    const newDeposit = getInputValue('deposit-field');
    
    // get previous deposit amount
    const previousDeposit = getMoney('deposit-money');

    // summation of new and previous deposit amount
    const totalDeposit = newDeposit + previousDeposit;
    
    // set deposit update amount
    setMoney('deposit-money', totalDeposit);

    // get main balance
    const previousTotalBalance = getMoney('total-balance');

    // new main balance
    const newTotalBalance = previousTotalBalance + newDeposit;

    // set update main balance
    setMoney('total-balance', newTotalBalance);
})