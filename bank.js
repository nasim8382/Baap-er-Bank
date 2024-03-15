// code for deposit section
document.getElementById('deposit-btn').addEventListener('click', () => {
    // deposit input field value
    const depositInput = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositInput.value);

    // clear the deposit field
    depositInput.value = '';

    // negative number input error handling
    if(newDepositAmount < 0 || isNaN(newDepositAmount)){
        alert('please give valid number');
        return;
    }

    // deposit card section
    const depositTotalElement = document.getElementById('deposit-money');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // total deposit balance
    const totalDeposit = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = totalDeposit;

    // update total balance
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(totalBalanceElement.textContent);
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = newTotalBalance;
})

// code for withdraw section
document.getElementById('withdraw-btn').addEventListener('click', () => {
    // withdraw input field value
    const withdrawInput = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawInput.value);

    // clear the withdraw field
    withdrawInput.value = '';

    // negative number input error handling
    if(newWithdrawAmount < 0 || isNaN(newWithdrawAmount)){
        alert('please give valid number');
        return;
    }

    // withdraw card section
    const withdrawTotalElement= document.getElementById('withdraw-money');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // update total balance
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalance = parseFloat(totalBalanceElement.textContent);

    if(newWithdrawAmount > previousTotalBalance){
        alert('Baap er bank a eto taka nai');
        return;
    }

    // total withdraw balance
    const totalWithdraw = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = totalWithdraw;

    const newTotalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = newTotalBalance;
})