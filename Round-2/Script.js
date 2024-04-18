document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'p@ssw0rd') {
        displayFlag();
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

function displayFlag() {
    var encryptedFlag = "RmxhZzogQnIxbjVnN0gzbUgwbTM="; 
    var decodedFlag = atob(encryptedFlag); 
    alert(decodedFlag);
}