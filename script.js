document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
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


// Skils Section -------------------------------------



const skills = [
    // { name: 'React', icon: 'fab fa-react', rating: 4, description: 'A JavaScript library for building user interfaces.' },
    // { name: 'NodeJs', icon: 'fab fa-node-js', rating: 4, description: 'JavaScript runtime for backend development.' },
    // { name: 'ExpressJs', icon: 'fab fa-node', rating: 3, description: 'Minimalist web framework for Node.js.' },
    { name: 'HTML5', icon: 'fab fa-html5', rating: 5, description: 'Markup language for structuring web pages.' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', rating: 4, description: 'Stylesheet use for designing web pages.' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', rating: 4, description: 'CSS framework for responsive design.' },
    { name: 'JavaScript', icon: 'fab fa-js', rating: 4, description: 'A scripting language for web development.' },
    { name: 'Python', icon: 'fab fa-python', rating: 3, description: 'High-level programming language for general-purpose coding.' },
    { name: 'GitHub', icon: 'fab fa-github', rating: 4, description: 'Platform for version control,deployment and collaboration.' },
    { name: 'VS Code', icon: 'fas fa-code', rating: 4, description: 'Popular code editor for multiple Programming languages.' },
    { name: 'SQL', icon: 'fas fa-database', rating: 3, description: 'Language for storing and managing relational databases.' },
    { name: 'Java', icon: 'fab fa-java', rating: 3, description: ' A high-level, object-oriented programming language designed for general-purpose coding.' },
    { name: 'EDIUS X', icon: 'fa-solid fa-video', rating: 4, description: 'Professional video editing software for fast workflows and classic effects.' },
    { name: 'Adobe Premiere Pro', icon: 'fas fa-film', rating: 3, description: 'Industry-standard video editing software for high-quality productions.' },
    { name: 'Photography', icon: 'fas fa-camera', rating: 5, description: 'Capturing moments with creativity and precision, bringing stories to life through the lens.' }]




// Force FontAwesome to refresh the icons
window.FontAwesome && FontAwesome.dom.i2svg();




document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.getElementById("skills-container");

    function renderSkills() {
        let skillsHTML = "";
        skills.forEach((skill) => {
            let stars = "";
            for (let i = 0; i < 5; i++) {
                stars += `<i class="fas fa-star ${i < skill.rating ? 'gold-star' : 'gray-star'}"></i>`;
            }

            skillsHTML += `
                <div class="col-md-3 col-sm-6">
                    <div class="skill-card p-3">
                        <i class="${skill.icon} skill-icon"></i>
                        <div class="skill-title">${skill.name}</div>
                        <div class="skill-description">${skill.description}</div>
                        <div class="stars">${stars}</div>
                    </div>
                </div>`;
        });

        skillsContainer.innerHTML = skillsHTML;
    }

    // Initial Render
    renderSkills();

    // Function to Add a New Skill
    document.getElementById("addSkillBtn").addEventListener("click", function () {
        // Example: Adding EDIUS X and Adobe Premiere Pro skills dynamically
        skills.push(
            { name: 'EDIUS X', icon: 'fas fa-film', rating: 4, description: 'Professional video editing software for fast workflows.' },
            { name: 'Adobe Premiere Pro', icon: 'fas fa-video', rating: 5, description: 'Industry-standard video editing software for creatives.' }
        );

        // Re-render Skills
        renderSkills();
    });
});



// --------------------------Skill Section----------------------


// Auto-update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for footer links
document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const bubblesContainer = document.getElementById('bubbles');
    const bubbleCount = 20;

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
        createBubble(bubblesContainer);
    }

    // Add new bubbles periodically
    setInterval(() => {
        createBubble(bubblesContainer);
    }, 1000);

    function createBubble(container) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Random properties
        const size = Math.random() * 60 + 20; // 20px to 80px
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;
        const blur = Math.random() * 5;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}%`;
        bubble.style.bottom = `-${size}px`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.opacity = opacity;
        bubble.style.filter = `blur(${blur}px)`;

        // Random color variation
        const hue = Math.random() * 30 + 250; // Purple/pink range
        bubble.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${opacity})`;

        container.appendChild(bubble);

        // Remove bubble after animation completes
        setTimeout(() => {
            bubble.remove();
        }, duration * 1000);
    }
});



// -------------------Back To Top Button ------------------------


window.addEventListener('scroll', function () {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});


// ------------------------------- Project Hidden button --------------------------

document.getElementById("show-more-btn").addEventListener("click", function () {
    const hiddenProjects = document.querySelectorAll(".hidden-project");
    hiddenProjects.forEach(project => {
        project.style.display = "block";
    });
    this.style.display = "none"; // hide the button after showing
});


// ------------------------------- Certification Hidden button --------------------------

document.getElementById("show-more-cert").addEventListener("click", function () {
    const hiddenCerts = document.querySelectorAll(".hidden-cert");
    hiddenCerts.forEach(card => {
      card.style.display = "block";
    });
    this.style.display = "none"; // Hide the button after showing more
  });

  