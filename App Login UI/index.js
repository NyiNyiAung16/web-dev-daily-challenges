const inputPassword = document.getElementById('input-password');
const eyeSlash = document.getElementById('eye-slash');

eyeSlash.addEventListener('click', (e) => {
    e.preventDefault();

    if ( inputPassword.type === 'password' ) {
        inputPassword.type = 'text';
        eyeSlash.classList.remove('fa-eye-slash');
        eyeSlash.classList.add('fa-eye');
    } else if( inputPassword.type === 'text' ) {
        inputPassword.type = 'password';
        eyeSlash.classList.remove('fa-eye');
        eyeSlash.classList.add('fa-eye-slash');
    }
})