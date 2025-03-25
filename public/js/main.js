// Ensure GSAP is loaded
// Ensure animations trigger correctly
document.addEventListener("DOMContentLoaded", function () {
    
    // Hero Text Fade-in Animation
    gsap.to(".galaxy-title", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.to(".galaxy-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out"
    });

    // Floating Animation (Subtle Movement)
    gsap.to(".galaxy-title", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"
    });

    gsap.to(".galaxy-subtitle", {
        y: 5,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut"
    });



    // Parallax Effect for Background
    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset;
        document.querySelector(".parallax").style.backgroundPositionY = offset * 0.5 + "px";
    });

    // Hover Animation for Text Effects
    document.querySelectorAll(".hero-title span").forEach((span) => {
        span.addEventListener("mouseenter", function () {
            gsap.to(span, {
                scale: 1.2,
                color: "#ffea00",
                duration: 0.3
            });
        });

        span.addEventListener("mouseleave", function () {
            gsap.to(span, {
                scale: 1,
                color: "yellow",
                duration: 0.3
            });
        });
    });

});
// Parallax Effect for Multiple Sections
gsap.utils.toArray(".parallax-section").forEach((section, i) => {
    gsap.to(section.querySelector(".parallax-bg-1, .parallax-bg-2"), {
        y: -100,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// Fade-in Animation for Parallax Text
gsap.utils.toArray(".parallax-title, .parallax-text").forEach((text) => {
    gsap.from(text, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: text,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Parallax Effect for Backgrounds
gsap.utils.toArray(".parallax-section").forEach((section, i) => {
    gsap.to(section.querySelector(".parallax-bg-1, .parallax-bg-2"), {
        y: -100,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// Animated Text Blocks
gsap.utils.toArray(".text-block").forEach((block) => {
    gsap.to(block, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Text Floating Animation (Subtle Movement)
gsap.utils.toArray(".parallax-title, .parallax-text").forEach((text) => {
    gsap.fromTo(text,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out",
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
});
// Animate Mockup Frames
gsap.from(".mockup-frame", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".mockup-section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Make Text Glow Dynamically
gsap.to(".galaxy-text", {
    textShadow: "0 0 25px rgba(0, 255, 255, 1)",
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut"
});


// Animate Geometric Shapes with GSAP
gsap.to(".circle", {
    x: 50,
    yoyo: true,
    repeat: -1,
    duration: 4,
    ease: "power1.inOut"
});

gsap.to(".triangle", {
    x: -50,
    yoyo: true,
    repeat: -1,
    duration: 5,
    ease: "power1.inOut"
});

gsap.to(".square", {
    y: -50,
    yoyo: true,
    repeat: -1,
    duration: 6,
    ease: "power1.inOut"
});


// Slide in the Galaxy Paragraph
gsap.from(".galaxy-paragraph", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".galaxy-paragraph",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Function to animate each shape randomly
function animateShape(shape) {
    gsap.to(shape, {
        x: gsap.utils.random(-200, 200), 
        y: gsap.utils.random(-200, 200), 
        rotation: gsap.utils.random(0, 360),
        scale: gsap.utils.random(0.8, 1.5),
        duration: gsap.utils.random(4, 8),
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });
}

// Apply animation to all shapes
document.querySelectorAll(".shape").forEach(shape => {
    animateShape(shape);
});
