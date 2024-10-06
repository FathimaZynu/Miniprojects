let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')

let emailRegx = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

let usernameError = document.getElementById('usernameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');

function validateForm() {
    let isValid = true;

    if (username.value === '' || username.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        usernameError.style.visibility = 'visible';
        isValid = false;
    } else {
        usernameError.style.visibility = 'hidden';
    }

    if (email.value === '' || !emailRegx.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.visibility = 'visible';
        isValid = false;
    } else {
        emailError.style.visibility = 'hidden';
    }

    if (password.value === '' || !passRegx.test(password.value)) {
        passwordError.textContent = 'Password must be at least 8 characters'
        passwordError.style.visibility = 'visible';
        isValid = false;
    } else {
        passwordError.style.visibility = 'hidden';
    }
    return isValid;

}

form.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});









