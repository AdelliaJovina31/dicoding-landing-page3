document.getElementById(logout-button).addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');

    window.location.href = 'login.html';
});