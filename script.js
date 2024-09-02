document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.card-inner').classList.add('card-flip');
});
