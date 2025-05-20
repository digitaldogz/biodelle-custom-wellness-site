
/**
 * Main JavaScript file for the Biodelle WordPress theme
 */

(function() {
  // Header scroll effect
  function handleHeaderScroll() {
    const header = document.getElementById('masthead');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
  
  // Mobile menu toggle
  function setupMobileMenu() {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('active');
      });
    }
  }
  
  // WhatsApp form handling
  function setupWhatsAppForm() {
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
      whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        const whatsappInput = document.getElementById('whatsapp');
        
        let whatsappMessage = '';
        
        if (nameInput && messageInput) {
          whatsappMessage = `Olá! Meu nome é ${nameInput.value}. ${messageInput.value}`;
        }
        
        // Optional phone field
        let phoneNumber = '5500000000000'; // Default phone number
        if (whatsappInput) {
          // If there's a specific WhatsApp number input, we can use it for businesses with multiple numbers
          // This is just a placeholder implementation
          console.log('WhatsApp number provided:', whatsappInput.value);
        }
        
        if (whatsappMessage) {
          const encodedMessage = encodeURIComponent(whatsappMessage);
          window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        }
      });
    }
  }
  
  // Smooth scroll for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.startsWith('#')) {
          e.preventDefault();
          
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
  
  // Initialize all functionality
  function init() {
    // Set up event listeners
    window.addEventListener('scroll', handleHeaderScroll);
    window.addEventListener('load', handleHeaderScroll); // Initial check
    
    setupMobileMenu();
    setupWhatsAppForm();
    setupSmoothScroll();
    
    // Add any additional initialization here
  }
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', init);
})();
