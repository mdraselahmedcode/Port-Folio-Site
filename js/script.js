document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navlinks a");
    const sections = document.querySelectorAll("section, .hero-section, .abt-me-section, .our-services-section, .our-project-section, .contact-me-section");

    // Highlight navigation link based on scroll position
    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSectionId) {
                link.classList.add("active");
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
        
        
        document.addEventListener("DOMContentLoaded", function () {
            const hamburger = document.querySelector(".hamburger");
            const navlinks = document.querySelector(".navlinks");
            const gaplinktop = document.querySelector(".gaplinktop");
            const navItems = document.querySelectorAll(".navlinks a");
            const icon = hamburger.querySelector("i");
            const body = document.querySelector("body");
            const inputBoxes = document.querySelectorAll(".inputBox");



            const navbar = document.querySelector(".navbar");
            // const defaultColor = "#12131B"; // Default navbar color
            // const scrolledColor = "#18B9C4"; // Color when scrolled
            const defaultColor = "rgba(18, 19, 27, 1)"; // Default navbar color (fully opaque)
            const scrolledColor = "rgba(18, 19, 27, 0.8)"; // Navbar color with reduced opacity

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) { // Change 50 to the scroll value you want
                    navbar.style.backgroundColor = scrolledColor;
                } else {
                    navbar.style.backgroundColor = defaultColor;
                }
            });



            // Adding event listeners to input boxes adding and removing active class on focus and blur ----------------
            inputBoxes.forEach((box) => {
                const input = box.querySelector("input, textarea");
                const label = box.querySelector("label");

                if (!label) return;

                // Add event listeners for focus and blur
                input.addEventListener("focus", function () {
                    label.classList.add("active");
                });

                input.addEventListener("blur", function () {
                    if (input.value.trim() === "") {
                        label.classList.remove("active");
                    }
                });

                // Check on page load if the field is not empty
                if (input.value.trim() !== "") {
                    label.classList.add("active");
                }
            });

            // Dynamic text effect ---------------------------------------------
            const dynamicText = document.querySelector(".dynamic-text");
            const textArray = ["Front-end Developer", "Back-end Developer", "Full-Stack Developer", "UI-UX Designer"];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeEffect() {
                const currentText = textArray[textIndex];
                if (isDeleting) {
                    dynamicText.textContent = currentText.substring(0, charIndex--);
                } else {
                    dynamicText.textContent = currentText.substring(0, charIndex++);
                }

                if (!isDeleting && charIndex === currentText.length + 1) {
                    // Pause for a longer time after the word is fully typed
                    isDeleting = true;
                    setTimeout(typeEffect, 1000); // Pause for 1 seconds
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % textArray.length; // Move to the next text
                    setTimeout(typeEffect, 500); // Pause before typing the next word
                } else {
                    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
                }
            }

            typeEffect();


            // Toggle navbar visibility ----------------------------------------
            hamburger.addEventListener("click", function () {
                navlinks.classList.toggle("show");
                hamburger.classList.toggle("active");

                // Toggle between hamburger and close icon
                if (navlinks.classList.contains("show")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                    gaplinktop.style.right = "0";
                    body.style.overflow = "hidden";
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                    gaplinktop.style.right = "-100%";
                    body.style.overflow = "auto";
                }
            });

            
            // Add click event to each nav link --------------------------------
            navItems.forEach(item => {
                item.addEventListener("click", function () {
                    // Remove active class from all links
                    navItems.forEach(link => link.classList.remove("active"));

                    // Add active class to the clicked link
                    this.classList.add("active");
                    if (navlinks.classList.contains("show")) {
                        navlinks.classList.remove("show");
                        hamburger.classList.remove("active");
                        icon.classList.remove("fa-times");
                        icon.classList.add("fa-bars");
                        gaplinktop.style.right = "-100%";
                        body.style.overflow = "auto";
                    } else {
                        return;
                    }
                });
            });
        });