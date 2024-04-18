function submitForm() {
    // Get the value of the name input
    var userInput = document.getElementById('nameInput').value;
    function View() {
        var encrypted = "ZmxhZzogN0gzMW50M2xsMUczTjc="; 
        var decoded = atob(encrypted); 
        alert(decoded);
    }

    // Display a personalized greeting
    var greeting = document.createElement('p');
    greeting.textContent = 'Hello, ' + userInput + '!';
    document.body.appendChild(greeting);

    // Check if the userInput contains the trigger for XSS (e.g., "alert()")
    if (userInput.includes('</p><script>alert()</script>') || userInput.includes('</p><script>alert(1)</script>')){ 
        // Execute the alert and reveal the flag (in a real scenario, this would be secured differently)
        View()
    }
  
}
