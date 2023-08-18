document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('clicked');

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'admin' && password === 'admin'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})