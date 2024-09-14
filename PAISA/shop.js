// JavaScript for TireCare Homepage

// Event listener for the subscription form
document.querySelector('.subscribe-section form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('.subscribe-section input[type="email"]').value;

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

// Event listeners for filter buttons (example)
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Filter applied: ${this.textContent}`);
    });
});

// Event listener for "Add To Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Item added to cart!');
    });
});
