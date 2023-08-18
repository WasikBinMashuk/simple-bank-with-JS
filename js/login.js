document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('clicked');

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'admin@gmail.com' && password === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('Invalid User');
    }
})