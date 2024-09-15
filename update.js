document.getElementById('back').addEventListener('click', function () {
    window.location.href = 'main.html';
})
document.getElementById('pass_input').addEventListener('click', function () {
    const pass = document.getElementById('pass');
    const password = pass.value;
    if (password === 'arif341a') {
        window.location.href = 'change.html';
    }
    else {
        alert('Incorrect password. Please try again.');
        pass.value = '';
    }
})