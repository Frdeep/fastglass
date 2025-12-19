/**
 * FASTGLASS75 - Main JavaScript
 * Animations, interactions and functionality
 * Version 2.0 - Enhanced animations (fade, bounce)
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initFAQ();
    initSmoothScroll();
    initContactForm();
    initWhatsAppWidget();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const scrollThreshold = 100;

    function handleScroll() {
        const currentScroll = window.scrollY;

        if (currentScroll > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('navbarToggle');
    const menu = document.getElementById('mobileMenu');
    
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggle.classList.remove('active');
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    menu.addEventListener('click', function(e) {
        if (e.target === menu) {
            toggle.classList.remove('active');
            menu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) {
            toggle.classList.remove('active');
            menu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Scroll animations using Intersection Observer
 * Supports: fade-in, fade-in-up, fade-in-down, fade-in-left, fade-in-right,
 *          bounce-in, bounce-in-up, scale-in, reveal
 */
function initScrollAnimations() {
    // All animation classes to observe
    const animationClasses = [
        'fade-in',
        'fade-in-up',
        'fade-in-down',
        'fade-in-left',
        'fade-in-right',
        'bounce-in',
        'bounce-in-up',
        'scale-in',
        'reveal'
    ];
    
    const selector = animationClasses.map(c => '.' + c).join(', ');
    const animatedElements = document.querySelectorAll(selector);
    
    if (!animatedElements.length) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        animatedElements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class with a small delay for stagger effect
                requestAnimationFrame(() => {
                    entry.target.classList.add('visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => animationObserver.observe(el));
}

/**
 * FAQ accordion functionality
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        if (!header) return;

        header.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');
            
            // Optional: Close other items (accordion behavior)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) {
            //         otherItem.classList.remove('open');
            //         otherItem.querySelector('.faq-header').setAttribute('aria-expanded', 'false');
            //     }
            // });
            
            item.classList.toggle('open');
            header.setAttribute('aria-expanded', !isOpen);
        });

        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - navbarHeight - 24;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Contact form handling
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    // Check if Netlify form handling is enabled
    const isNetlify = form.hasAttribute('data-netlify');
    
    if (isNetlify) {
        // Let Netlify handle the form submission
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = `
                <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
                </svg>
                Envoi en cours...
            `;
            submitBtn.disabled = true;
        });
    } else {
        // Fallback for non-Netlify environments
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `
                <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/>
                </svg>
                Envoi en cours...
            `;
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Demande envoyée !
                `;
                submitBtn.style.background = 'var(--color-success)';
                submitBtn.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.3)';
                
                form.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.boxShadow = '';
                    submitBtn.disabled = false;
                }, 3000);
                
            }, 1500);
        });
    }

    // Real-time validation
    const inputs = form.querySelectorAll('.input-field');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
    });
}

/**
 * Validate individual form field
 */
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    if (!required && !value) return true;
    
    let isValid = true;
    
    if (required && !value) {
        isValid = false;
    } else if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    } else if (type === 'tel' && value) {
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        isValid = phoneRegex.test(value.replace(/\s/g, ''));
    }
    
    if (!isValid) {
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }
    
    return isValid;
}

/**
 * Animate counter numbers (for stats)
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * WhatsApp Widget v2
 */
function initWhatsAppWidget() {
    const widget = document.getElementById('waWidget');
    const btn = document.getElementById('waBtn');
    const chat = document.getElementById('waChat');
    
    if (!widget || !btn) return;
    
    // Toggle chat on button click
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        widget.classList.toggle('open');
    });
    
    // Close chat when clicking outside
    document.addEventListener('click', function(e) {
        if (widget.classList.contains('open') && !widget.contains(e.target)) {
            widget.classList.remove('open');
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && widget.classList.contains('open')) {
            widget.classList.remove('open');
        }
    });
    
    // Prevent closing when clicking inside chat
    if (chat) {
        chat.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Add CSS for form error state and loading animation
const style = document.createElement('style');
style.textContent = `
    .input-field.error {
        border-color: #EF4444 !important;
        background-color: #FEF2F2 !important;
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
