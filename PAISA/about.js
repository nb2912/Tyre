// JavaScript for TireCare About Us Page

// Function to handle form submission for subscription
document.querySelector('.subscribe-section form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email').value;
    
    if (validateEmail(emailInput)) {
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter a valid email address.');
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
