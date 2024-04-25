function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example validation - Check if username and password are correct
    if (username === 'user' && password === 'password') {
        // Valid credentials, allow login (replace action URL with dashboard URL)
        window.location.href = 'dashboard.html';
        return false;
    } else {
        // Invalid credentials, show error message
        document.getElementById('errorMessage').textContent = 'Invalid username or password.';
        return false;
    }
}