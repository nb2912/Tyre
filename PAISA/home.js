// script.js

// This function will handle the tire search form submission
function handleSearch() {
    const tireWidth = document.getElementById('tire-width').value;
    const aspectRatio = document.getElementById('aspect-ratio').value;
    const rimDiameter = document.getElementById('rim-diameter').value;

    alert(`Searching for tires with width: ${tireWidth}, aspect ratio: ${aspectRatio}, and rim diameter: ${rimDiameter}`);
}

// Adding event listener to the search button
document.querySelector('.search-box button').addEventListener('click', handleSearch);

// This function can be used to handle clicks on the tire category buttons
function handleTireCategoryClick(event) {
    const category = event.target.textContent;
    alert(`You clicked on ${category} tires`);
}

// Adding event listeners to tire category buttons
document.querySelectorAll('.button-group .button').forEach(button => {
    button.addEventListener('click', handleTireCategoryClick);
});

// This function can be used to handle the vehicle type selection
function handleVehicleTypeClick(event) {
    const vehicleType = event.target.textContent.trim();
    alert(`You selected ${vehicleType} as your vehicle type`);
}

// Adding event listeners to vehicle type buttons
document.querySelectorAll('.vehicle-type .button').forEach(button => {
    button.addEventListener('click', handleVehicleTypeClick);
});

// Function to handle subscription form submission
function handleSubscription(event) {
    event.preventDefault();
    const email = document.querySelector('#subscribe input[type="email"]').value;
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter a valid email address');
    }
}

// Adding event listener to the subscription form
document.querySelector('#subscribe form').addEventListener('submit', handleSubscription);

// Function to handle clicks on social media links
function handleSocialMediaClick(event) {
    const socialMedia = event.target.textContent;
    alert(`You clicked on ${socialMedia}`);
}

// Adding event listeners to social media links
document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', handleSocialMediaClick);
});
