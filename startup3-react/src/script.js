// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger menu toggle for mobile nav
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileOverlay = document.querySelector('.nav-mobile-overlay');
    if (hamburger && mobileOverlay) {
        hamburger.addEventListener('click', function() {
            mobileOverlay.classList.toggle('active');
        });
        // Close mobile menu when clicking outside or on a link
        mobileOverlay.addEventListener('click', function(e) {
            if (e.target === mobileOverlay || e.target.tagName === 'A') {
                mobileOverlay.classList.remove('active');
            }
        });
    }

    // Hero dots and arrows functionality
    const dots = document.querySelectorAll('.hero-dots .dot');
    let currentDot = 0;

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentDot);
        });
    }

    // Auto-rotate dots every 4 seconds
    let heroInterval = setInterval(() => {
        currentDot = (currentDot + 1) % dots.length;
        updateDots();
    }, 4000);

    // Manual dot clicking
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentDot = index;
            updateDots();
            resetHeroInterval();
        });
    });

    // Arrows
    const leftArrow = document.querySelector('.hero-arrow-left');
    const rightArrow = document.querySelector('.hero-arrow-right');

    function goLeft() {
        currentDot = (currentDot - 1 + dots.length) % dots.length;
        updateDots();
        resetHeroInterval();
    }
    function goRight() {
        currentDot = (currentDot + 1) % dots.length;
        updateDots();
        resetHeroInterval();
    }
    function resetHeroInterval() {
        clearInterval(heroInterval);
        heroInterval = setInterval(() => {
            currentDot = (currentDot + 1) % dots.length;
            updateDots();
        }, 4000);
    }
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', goLeft);
        rightArrow.addEventListener('click', goRight);
        leftArrow.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') goLeft(); });
        rightArrow.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') goRight(); });
    }

    // Form tabs functionality
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Navbar background/blur change on scroll and section-aware color
    const navbar = document.querySelector('.navbar');
    const sectionColors = [
        {id: 'home', className: 'bg-hero'},
        {id: 'features', className: 'bg-features'},
        {id: 'product', className: 'bg-product'},
        {id: 'auth', className: 'bg-auth'},
        {id: 'testimonials', className: 'bg-testimonials'},
        {id: 'cta', className: 'bg-cta'},
        {id: 'portfolio', className: 'bg-portfolio'},
        {id: 'team', className: 'bg-team'},
        {id: 'contact', className: 'bg-contact'},
        {id: 'pricing', className: 'bg-pricing'}
    ];
    function updateNavbarColor() {
        let found = false;
        for (const s of sectionColors) {
            const section = document.getElementById(s.id);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 80 && rect.bottom > 80) {
                    navbar.className = 'navbar ' + s.className;
                    found = true;
                    break;
                }
            }
        }
        if (!found) navbar.className = 'navbar';
    }
    window.addEventListener('scroll', updateNavbarColor);
    window.addEventListener('resize', updateNavbarColor);
    updateNavbarColor();

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Portfolio item hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Team member card animations
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach((member, index) => {
        member.style.animationDelay = `${index * 0.1}s`;
        member.style.animation = 'fadeInUp 0.6s ease forwards';
    });

    // Pricing card hover effects
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            } else {
                this.style.transform = 'scale(1.08) translateY(-15px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            } else {
                this.style.transform = 'scale(1.05) translateY(0)';
            }
        });
    });

    // Form validation and submission
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get all required inputs
            const requiredInputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff4757';
                    input.style.boxShadow = '0 0 0 3px rgba(255, 71, 87, 0.1)';
                } else {
                    input.style.borderColor = '#00D4AA';
                    input.style.boxShadow = '0 0 0 3px rgba(0, 212, 170, 0.1)';
                }
            });
            
            if (isValid) {
                // Show success message
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sent Successfully!';
                submitBtn.style.background = '#00D4AA';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    this.reset();
                }, 2000);
            }
        });
    });

    // Add parallax effect to background images
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero, .features, .product, .auth-section, .cta-section, .contact');
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.backgroundPosition = `center ${rate}px`;
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Mobile menu toggle (for responsive design)
    function createMobileMenu() {
        const navbar = document.querySelector('.navbar .container');
        const navMenu = document.querySelector('.nav-menu');
        
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        hamburger.style.display = 'none';
        hamburger.style.background = 'none';
        hamburger.style.border = 'none';
        hamburger.style.color = '#ffffff';
        hamburger.style.fontSize = '1.5rem';
        hamburger.style.cursor = 'pointer';
        
        navbar.appendChild(hamburger);
        
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('mobile-active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Show/hide hamburger based on screen size
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                hamburger.style.display = 'block';
                navMenu.style.display = navMenu.classList.contains('mobile-active') ? 'flex' : 'none';
            } else {
                hamburger.style.display = 'none';
                navMenu.style.display = 'flex';
                navMenu.classList.remove('mobile-active');
            }
        }
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    }
    
    createMobileMenu();

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
});

// Add CSS animations keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .mobile-active {
        position: fixed !important;
        top: 80px !important;
        left: 0 !important;
        right: 0 !important;
        background: rgba(91, 44, 135, 0.95) !important;
        flex-direction: column !important;
        padding: 2rem !important;
        backdrop-filter: blur(10px) !important;
        z-index: 999 !important;
    }
    
    .mobile-active li {
        margin: 1rem 0 !important;
    }
`;

document.head.appendChild(style);

// Add this to your script.js to remove any conflicting hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Remove any inline styles from pricing cards that might cause inconsistency
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        // Remove existing event listeners by cloning and replacing
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        // Remove any inline styles and featured class
        newCard.removeAttribute('style');
        newCard.classList.remove('featured');
    });
});