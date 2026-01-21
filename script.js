// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Testimonial Carousel
    const dots = document.querySelectorAll('.dot');
    const testimonials = [
        {
            quote: "Am întâlnit o echipă de profesioniști care tratează pacientul cu grijă și responsabilitate. Recomand ARTZ DENT.",
            author: "Vasilică B.",
            role: "Pacient"
        },
        {
            quote: "De fiecare dată m-am simțit ca acasă. Frica de dentist dispare când atmosfera e caldă și totul e explicat.",
            author: "Angelica F.",
            role: "Pacientă"
        },
        {
            quote: "Profesionalism și echipamente moderne. Personal amabil, cabinet curat și organizat.",
            author: "Lucian C.",
            role: "Pacient"
        },
        {
            quote: "Explică totul clar și lucrează atent. Am fost surprins cât de confortabil a fost tratamentul.",
            author: "Mari B.",
            role: "Pacientă"
        },
        {
            quote: "Am avut nevoie de un tratament complex și am fost impresionat de planificare și rezultate.",
            author: "Andrei M.",
            role: "Pacient"
        },
        {
            quote: "Atmosferă prietenoasă, echipă competentă. Am recomandat mai departe cu încredere.",
            author: "Ioana R.",
            role: "Pacientă"
        }
    ];

    let currentTestimonial = 0;

    function showTestimonial(index) {
        const testimonialQuote = document.querySelector('.testimonial-quote');
        const testimonialAuthor = document.querySelector('.testimonial-author h4');
        const testimonialRole = document.querySelector('.testimonial-author p');

        // Fade out current testimonial
        testimonialQuote.style.opacity = '0';
        testimonialAuthor.style.opacity = '0';
        testimonialRole.style.opacity = '0';

        setTimeout(() => {
            // Update content
            testimonialQuote.textContent = testimonials[index].quote;
            testimonialAuthor.textContent = testimonials[index].author;
            testimonialRole.textContent = testimonials[index].role;

            // Fade in new testimonial
            testimonialQuote.style.opacity = '1';
            testimonialAuthor.style.opacity = '1';
            testimonialRole.style.opacity = '1';
        }, 300);

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });

    // Auto-advance testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Gallery Filmstrip Scroll
    const galleryFilmstrip = document.querySelector('.gallery-filmstrip');

    galleryFilmstrip.addEventListener('wheel', function(e) {
        e.preventDefault();
        this.scrollLeft += e.deltaY;
    });

    // Navbar Scroll Effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted:', data);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Mesajul dumneavoastră a fost trimis cu succes! Vom reveni cu un răspuns în cel mai scurt timp.';
            successMessage.style.cssText = 'position: fixed; top: 20px; right: 20px; background-color: var(--color-primary); color: white; padding: 1rem 1.5rem; border-radius: 4px; z-index: 10000; animation: slideIn 0.5s ease;';
            
            document.body.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.style.animation = 'slideOut 0.5s ease';
                setTimeout(() => {
                    document.body.removeChild(successMessage);
                }, 500);
            }, 3000);
            
            contactForm.reset();
        });
    }

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});