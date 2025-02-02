// Wait for the DOM to load before executing scripts
document.addEventListener("DOMContentLoaded", function () {
    
    // Typing Effect for Introduction
    const text = "An aspiring computer engineer improving his web development skills.";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect(); // Start typing effect

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Email Click Event
    document.getElementById("email-link").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "http://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMmTVcWzQhgfRcGPZqbVQWVGLLNwQzcwSpDhvVwNVwFfGMDvQjRdNJlHNMTlNDtKbKqHbwb";
    });

    // Scroll-to-Top Button
    const scrollButton = document.getElementById("scroll-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
