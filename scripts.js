// Example: Simple Product Filter (Filter by product type)
const filterProducts = (category) => {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
      if (category === 'all' || product.querySelector('h3').textContent.toLowerCase().includes(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  };
  
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Example: Add Event Listeners for Filtering
  document.querySelector('#filter-kale').addEventListener('click', () => filterProducts('kale'));
  document.querySelector('#filter-vegetables').addEventListener('click', () => filterProducts('vegetable'));
  document.querySelector('#filter-livestock').addEventListener('click', () => filterProducts('hens'));
  
  // Optional: Implement more interactivity like sliders or more complex filters
  
   // Array of image URLs for the hero section background
const heroImages = [
  'images/hen1.jpg',
  'images/cabbage1.jpg',
  'images/kale1.jpg',
  'images/sheep1.jpg',
  'images/cow1.jpg'
];

let currentImageIndex = 0;

// Wait for the text animation to complete (approx 2 seconds)
setTimeout(() => {
  // Start the image transition every 5 seconds
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    document.querySelector('.hero::before').style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
  }, 5000); // 5 seconds interval
}, 2000); // Initial delay to wait for text animation completion

  // Function to add animation classes
  window.addEventListener('load', function () {
    const heroText = document.querySelector('.hero-text');
    const heroHeading = heroText.querySelector('h1');
    const heroParagraph = heroText.querySelector('p');
    
    // Add the animation class to trigger fade-in and zoom effect
    heroText.classList.add('fade-in');
    heroHeading.classList.add('fade-in-delayed');
    heroParagraph.classList.add('fade-in-delayed-more');
  });