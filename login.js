document.getElementById('submit-btn').addEventListener('click', (event) => {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    // console.log(email, password);
    if(email === 'chele@baap.com' && password === 'baperbank'){
        console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
//     emailField.value= '';
//     passwordField.value= '';
})