function button() {
    const pass = document.getElementById('pass');
    const password = pass.value;
    if (password === '1234') {
        window.location.href = 'main.html';
    }
    else {
        alert('Incorrect password. Please try again.');
        pass.value = '';
    }

}

document.getElementById('input_pass').addEventListener('click', button);

