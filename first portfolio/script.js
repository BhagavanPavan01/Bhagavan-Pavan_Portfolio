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

// Project section-------------------------------------------------------------------
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.querySelector(".project-link").getAttribute("href");
        if (link) {
            window.open(link, "_blank");
        }
    });
});


var typed = new Typed("#typing-text", {
    strings: ["AND I'm a Frontend Developer.", "AND I'm a Graphic Designer."],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
  });
  
