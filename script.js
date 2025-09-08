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
    { name: 'HTML5', icon: 'fab fa-html5', rating: 5, description: 'The standard markup language for structuring web pages.' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', rating: 4, description: 'A language for styling and formatting web pages.' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', rating: 4, description: 'A CSS framework for responsive design and color styling.' },
    { name: 'JavaScript', icon: 'fab fa-js', rating: 4, description: 'A scripting language for dynamic web development.' },
    { name: 'NodeJs', icon: 'fab fa-node-js', rating: 4, description: 'JavaScript runtime for efficient backend development.' },
    { name: 'ExpressJs', icon: 'fab fa-node', rating: 3, description: 'A lightweight and minimalist web framework for Node.js.' },
    { name: 'Python', icon: 'fab fa-python', rating: 3, description: 'High-level programming language for general-purpose coding.' },
    { name: 'GitHub', icon: 'fab fa-github', rating: 4, description: 'Platform for version control,deployment and collaboration.' },
    { name: 'VS Code', icon: 'fas fa-code', rating: 4, description: 'Popular code editor for multiple Programming languages.' },
    { name: 'SQL', icon: 'fas fa-database', rating: 3, description: 'Language for storing and managing relational databases.' },
    { name: 'Java', icon: 'fab fa-java', rating: 3, description: ' A high-level, OOPs language designed for general-purpose coding.' },
    { name: 'EDIUS X', icon: 'fa-solid fa-video', rating: 4, description: 'Professional video editing software for fast workflows and classic effects.' },
    { name: 'Adobe Premiere Pro', icon: 'fas fa-film', rating: 3, description: 'Industry-standard video editing software for high-quality productions.' },
    { name: 'Photography', icon: 'fas fa-camera', rating: 5, description: 'Capturing moments with creativity and bringing stories to life through the lens.' }]




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


//   ===================  Backgrounf Lighting animations ==============

document.addEventListener('DOMContentLoaded', function () {
    const spaceBackground = document.getElementById('spaceBackground');

    // Create high-quality stars
    createStars(300);

    // Create nebulae for depth
    createNebula(100, 200, 'rgba(94, 39, 158, 0.3)', 0, 0);
    createNebula(300, 150, 'rgba(158, 39, 70, 0.3)', 80, 20);
    createNebula(500, 180, 'rgba(39, 118, 158, 0.3)', 40, 80);

    // Create planets with more detail
    createPlanet(50, 'radial-gradient(circle at 30% 30%, #4a5bac, #2a357a, #1a235a)',
        200, 80, 120, '#c9b273', 100, 8, 'rgba(201, 178, 115, 0.4)');
    createPlanet(40, 'radial-gradient(circle at 20% 20%, #d9a039, #b57e1a, #8c5e1a)',
        320, 120, 180, null, 0, 0);
    createPlanet(60, 'radial-gradient(circle at 40% 40%, #e27b7b, #c45a5a, #a44a4a)',
        450, 180, 240, '#e9d8b6', 140, 10, 'rgba(233, 216, 182, 0.4)');
    createPlanet(35, 'radial-gradient(circle at 25% 25%, #8ed1e6, #5ca0c8, #4a8ba8)',
        580, 240, 300);

    // Create shooting stars occasionally
    setInterval(createShootingStar, 3000);

    // Add cursor effect
    document.addEventListener('mousemove', handleCursorEffect);
});

function createStars(count) {
    const spaceBackground = document.getElementById('spaceBackground');

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random properties for each star
        const size = Math.random() * 4 + 0.5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = 3 + Math.random() * 7;
        const opacity = 0.5 + Math.random() * 0.5;

        // Set star properties
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', opacity);

        // Add delay for twinkling
        star.style.animationDelay = `${Math.random() * 5}s`;

        // Add glow effect for larger stars
        if (size > 2) {
            star.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        }

        spaceBackground.appendChild(star);
    }
}

function createNebula(width, height, color, left, top) {
    const spaceBackground = document.getElementById('spaceBackground');
    const nebula = document.createElement('div');
    nebula.classList.add('nebula');

    nebula.style.width = `${width}px`;
    nebula.style.height = `${height}px`;
    nebula.style.left = `${left}%`;
    nebula.style.top = `${top}%`;
    nebula.style.setProperty('--nebula-color', color);

    // Random animation duration
    nebula.style.animationDuration = `${60 + Math.random() * 60}s`;

    spaceBackground.appendChild(nebula);
}

function createPlanet(size, texture, orbitRadius, orbitDuration, rotationDuration, ringColor, ringWidth, ringHeight, ringGlow) {
    const spaceBackground = document.getElementById('spaceBackground');

    // Create planet container
    const planet = document.createElement('div');
    planet.classList.add('planet');

    // Set planet properties
    planet.style.width = `${size}px`;
    planet.style.height = `${size}px`;
    planet.style.setProperty('--planet-texture', texture);
    planet.style.setProperty('--orbit-radius', `${orbitRadius}px`);
    planet.style.setProperty('--orbit-duration', `${orbitDuration}s`);
    planet.style.setProperty('--rotation-duration', `${rotationDuration}s`);

    // Position planet in the center initially (will be moved by animation)
    planet.style.left = `calc(50% - ${size / 2}px)`;
    planet.style.top = `calc(50% - ${size / 2}px)`;

    spaceBackground.appendChild(planet);

    // Create ring if specified
    if (ringColor) {
        const ring = document.createElement('div');
        ring.classList.add('planet-ring');

        // Set ring properties
        ring.style.width = `${size + ringWidth}px`;
        ring.style.height = `${size + ringWidth}px`;
        ring.style.setProperty('--orbit-radius', `${orbitRadius}px`);
        ring.style.setProperty('--orbit-duration', `${orbitDuration}s`);
        ring.style.setProperty('--ring-color', ringColor);
        ring.style.setProperty('--ring-width', `${ringWidth}px`);
        ring.style.setProperty('--ring-height', `${ringHeight}px`);
        ring.style.setProperty('--ring-glow', ringGlow);

        // Position ring
        ring.style.left = `calc(50% - ${(size + ringWidth) / 2}px)`;
        ring.style.top = `calc(50% - ${(size + ringWidth) / 2}px)`;

        spaceBackground.appendChild(ring);
    }
}

function createShootingStar() {
    const spaceBackground = document.getElementById('spaceBackground');
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');

    // Random position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * 100;

    shootingStar.style.left = `${startX}px`;
    shootingStar.style.top = `${startY}px`;
    shootingStar.style.width = `${Math.random() * 50 + 50}px`;

    spaceBackground.appendChild(shootingStar);

    // Remove after animation completes
    setTimeout(() => {
        spaceBackground.removeChild(shootingStar);
    }, 2000);
}

function handleCursorEffect(e) {
    // Remove existing cursor effects
    const existingEffects = document.querySelectorAll('.cursor-effect');
    existingEffects.forEach(effect => {
        if (Date.now() - effect.timestamp > 100) {
            effect.parentElement.removeChild(effect);
        }
    });

    // Create new cursor effect
    const cursorEffect = document.createElement('div');
    cursorEffect.classList.add('cursor-effect');

    const size = Math.random() * 50 + 20;
    cursorEffect.style.width = `${size}px`;
    cursorEffect.style.height = `${size}px`;
    cursorEffect.style.left = `${e.clientX}px`;
    cursorEffect.style.top = `${e.clientY}px`;
    cursorEffect.timestamp = Date.now();

    // Add to background
    document.getElementById('spaceBackground').appendChild(cursorEffect);

    // Remove after a short time
    setTimeout(() => {
        if (cursorEffect.parentElement) {
            cursorEffect.parentElement.removeChild(cursorEffect);
        }
    }, 500);

    // Disturb stars near cursor
    disturbStars(e.clientX, e.clientY);
}

function disturbStars(x, y) {
    const stars = document.querySelectorAll('.star');
    const disturbanceRadius = 100;

    stars.forEach(star => {
        const starX = parseFloat(star.style.left) / 100 * window.innerWidth;
        const starY = parseFloat(star.style.top) / 100 * window.innerHeight;

        const distance = Math.sqrt(Math.pow(starX - x, 2) + Math.pow(starY - y, 2));

        if (distance < disturbanceRadius) {
            // Calculate disturbance strength (stronger when closer to cursor)
            const strength = 1 - (distance / disturbanceRadius);

            // Apply disturbance
            const moveX = (Math.random() - 0.5) * 20 * strength;
            const moveY = (Math.random() - 0.5) * 20 * strength;

            star.style.transform = `translate(${moveX}px, ${moveY}px)`;

            // Return to original position after a delay
            setTimeout(() => {
                star.style.transform = 'translate(0, 0)';
            }, 300);
        }
    });
}


// ================== Ending Background animationd code =====================