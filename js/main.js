// Main JavaScript file for Elixir Website

// Cart functionality
let cart = [];

function toggleCart() {
    // TODO: Implement cart modal/sidebar
    console.log('Cart toggled');
}

function addToCart(product) {
    cart.push(product);
    updateCartCount();
    // TODO: Show success message
}

function updateCartCount() {
    const cartButton = document.querySelector('button[onclick="toggleCart()"] span');
    if (cartButton) {
        cartButton.textContent = `Cart (${cart.length})`;
    }
}

// Newsletter subscription
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription:', email);
}

// Product image lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Form validation
function validateForm(form) {
    const email = form.querySelector('input[type="email"]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    return true;
}

// Add fade-in animation to elements when they come into view
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    fadeObserver.observe(element);
});

// Scroll animation for decorative bar
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            scrollObserver.unobserve(entry.target); // Only animate once
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const decorativeBar = document.querySelector('.elixir-decorative-bar');
    if (decorativeBar) {
        scrollObserver.observe(decorativeBar);
    }
}); 