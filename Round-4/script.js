function submitForm() {
    // Get the value of the name input
    var userInput = document.getElementById('nameInput').value;

    // Display a personalized greeting
    var greeting = document.createElement('p');
    greeting.textContent = 'Hello, ' + userInput + '!';
    document.body.appendChild(greeting);

    // Check if the userInput contains the trigger for XSS (e.g., "alert()")
    if (userInput.includes('</p><script>alert()</script>') || userInput.includes('</p><script>alert(1)</script>')){ 
        // Execute the alert and reveal the flag (in a real scenario, this would be secured differently)
        alert('Congratulations! You triggered the XSS vulnerability. Here is your flag: 7H31nt3ll1G3N7');
    }
}
