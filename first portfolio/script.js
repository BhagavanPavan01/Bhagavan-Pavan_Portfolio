document.addEventListener("DOMContentLoaded", function() {
    let fadeElements = document.querySelectorAll(".fade-in");
    
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const profileBorder = document.querySelector(".profile-border");

    profileBorder.addEventListener("mouseenter", () => {
        profileBorder.style.transform = "scale(1.1)";
    });

    profileBorder.addEventListener("mouseleave", () => {
        profileBorder.style.transform = "scale(1.0)";
    });
});




