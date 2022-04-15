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

const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('confirm-pwd');
