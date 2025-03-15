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
    { name: 'SQL', icon: 'fas fa-database', rating: 2, description: 'Language for storing and managing relational databases.' },
    // { name: 'Cloud Practitioner', icon: 'fab fa-aws', rating: 2, description: 'Basic cloud knowledge and AWS services.' }
];

// const skillsContainer = document.getElementById('skills-container');
// skills.forEach(skill => {
//     let stars = '<div class="stars">';
//     for (let i = 0; i < 5; i++) {
//         stars += `<i class="fas fa-star ${i < skill.rating ? '' : 'gray'}"></i>`;
//     }
//     stars += '</div>';

//     skillsContainer.innerHTML += `
//         <div class="col-md-3 col-sm-6">
//             <div class="skill-card p-3">
//                 <i class="${skill.icon} skill-icon"></i>
//                 <div class="skill-title">${skill.name}</div>
//                 <div class="skill-description">${skill.description}</div>
//                 ${stars}
//             </div>
//         </div>`;
// });

// skillsContainer.innerHTML += `
//     <div class="col-md-3 col-sm-6">
//         <div class="skill-card p-3">
//             <i class="${skill.icon} skill-icon"></i>
//             <div class="skill-title">${skill.name}</div>
//             <div class="skill-description">${skill.description}</div>
//             ${stars}
//         </div>
//     </div>`;
// // Refresh FontAwesome
// window.FontAwesome && FontAwesome.dom.i2svg();


// const skillsContainer = document.getElementById('skills-container');

// skills.forEach(skill => {
//     let stars = '<div class="stars">';
//     for (let i = 0; i < 5; i++) {
//         stars += `<i class="fas fa-star ${i < skill.rating ? '' : 'gray'}"></i>`;
//     }
//     stars += '</div>';

//     skillsContainer.innerHTML += `
//         <div class="col-md-3 col-sm-6">
//             <div class="skill-card p-3">
//                 <i class="${skill.icon} skill-icon"></i>
//                 <div class="skill-title">${skill.name}</div>
//                 <div class="skill-description">${skill.description}</div>
//                 ${stars}
//             </div>
//         </div>`;
// });

// Force FontAwesome to refresh the icons
window.FontAwesome && FontAwesome.dom.i2svg();


document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.getElementById("skills-container");

    if (skillsContainer) {
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
});

