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
  
  // Example: Add Event Listeners for Filtering
  document.querySelector('#filter-kale').addEventListener('click', () => filterProducts('kale'));
  document.querySelector('#filter-vegetables').addEventListener('click', () => filterProducts('vegetable'));
  document.querySelector('#filter-livestock').addEventListener('click', () => filterProducts('hens'));
  
  // Optional: Implement more interactivity like sliders or more complex filters

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
