// ==============================
// DARK MODE
// ==============================

// Find the dark mode button
const darkButton = document.getElementById("dark-btn");

// When the button is clicked
darkButton.addEventListener("click", function () {

    // Add or remove the dark-mode class
    document.body.classList.toggle("dark-mode");

    // Change button icon
    if (document.body.classList.contains("dark-mode")) {
        darkButton.textContent = "☀️";
    } else {
        darkButton.textContent = "🌙";
    }

});


// ==============================
// FETCH RANDOM QUOTE
// ==============================

// Find the button and paragraph
const quoteButton = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote");

// When button is clicked
quoteButton.addEventListener("click", function () {

    // Show loading message
    quoteText.textContent = "Loading...";

    // Fetch quote from API
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        quoteText.textContent = data.setup + " 😂 " + data.punchline;
    })
    .catch(function () {
        quoteText.textContent =
            "Unable to load joke. Please try again.";
    });

       

});


// ==============================
// SMOOTH SCROLL (BONUS)
// ==============================

// Select all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click event to each link
navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Prevent default jump
        event.preventDefault();

        // Get section ID
        const target = document.querySelector(
            this.getAttribute("href")
        );

        // Smooth scroll
        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});