// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  // AOS initialization
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Testimonial carousel
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial-item');
  const totalTestimonials = testimonials.length;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle('hidden', i !== index);
      testimonial.classList.toggle('opacity-0', i !== index);
      testimonial.classList.toggle('opacity-100', i === index);
    });
  }

  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Cart functionality
  const cartCount = document.getElementById('cart-count');
  let cartItems = 0;

  // Example: Add to cart functionality
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      cartItems++;
      if (cartCount) {
        cartCount.textContent = cartItems;
        cartCount.classList.remove('hidden');
      }
      
      // Add animation feedback
      this.textContent = 'Added!';
      this.classList.add('bg-green-500');
      setTimeout(() => {
        this.textContent = 'Add to Cart';
        this.classList.remove('bg-green-500');
      }, 2000);
    });
  });
});