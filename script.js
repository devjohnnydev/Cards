document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.card-inner').classList.add('card-flip');
});

document.getElementById('backButton').addEventListener('click', function() {
    document.querySelector('.card-inner').classList.remove('card-flip');
});
