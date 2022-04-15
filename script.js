/*
Form Validation
by Peyton Bechard

Created on 15 Apr 2022
*/

// Toggles warning labels on input fields
const inputs = document.querySelectorAll('input');
inputs.forEach( (input) => {
    input.addEventListener('focusout', () => {
        const warning = input.nextElementSibling;
        if (input.matches(':invalid:not(:focus):not(:placeholder-shown)')) {
            warning.style.visibility = 'visible';
        } else {
            warning.style.visibility = 'hidden';
        }
    });
});


// Confirms password matching
const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('confirm-pwd');

password.addEventListener('focusout', () => {
    if (confirmPassword.matches(':not(place-holder-shown)') && confirmPassword.value){
        if (confirmPassword.value === password.value) {
            confirmPassword.style.backgroundColor = 'rgba(54, 172, 84, 0.2)';
        } else {
            confirmPassword.style.backgroundColor = 'rgba(172, 54, 54, 0.2)';
        }
    }
});
confirmPassword.addEventListener('focusout', () => {
    if (confirmPassword.matches(':not(place-holder-shown)') && confirmPassword.value){
        if (confirmPassword.value === password.value) {
            confirmPassword.style.backgroundColor = 'rgba(54, 172, 84, 0.2)';
        } else {
            confirmPassword.style.backgroundColor = 'rgba(172, 54, 54, 0.2)';
        }
    }
});