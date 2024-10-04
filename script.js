let toggleButton = document.getElementsByClassName("toggleButton");
let element = document.getElementsByClassName("Product-price-hidden");
let close = document.getElementsByClassName("x");


for (let i = 0; i < toggleButton.length; i++) {
  toggleButton[i].addEventListener('click', function () {

    element[i].style.bottom = "0%";

    for (let y = 0; y < close.length; y++) {
      close[y].addEventListener('click', function () {

        element[y].style.bottom = "-100%";

      });
    }
  });
}



// TRY TO DO SEARCH BAR










// Initialize an empty cart array
let cart = [];

// Function to activate a specific menu section
function activateMenu(section) {
  // Get all content sections
  const sections = document.querySelectorAll(".content-section");
  // Remove 'active' class from all sections
  sections.forEach((sec) => {
    sec.classList.remove("active");
  });

  // Add 'active' class to the selected section
  const activeSection = document.getElementById(section + "Content");
  if (activeSection) {
    activeSection.classList.add("active");
  }

  // Update menu items to highlight the active one
  document.querySelectorAll("nav h1").forEach((item) => {
    item.classList.remove("active");
  });

  const activeMenuItem = document.getElementById(section);
  if (activeMenuItem) {
    activeMenuItem.classList.add("active");
  }

  // Display cart if the cart section is activated
  if (section === "cart") {
    displayCart();
  }
}




// Function to add a product to the cart
function addToCart(product, price, imageUrl) {
  cart.push({ product, price, imageUrl });
  updateCartCount();
  alert(`${product} has been added to the cart`);
}

// Function to display cart items
function displayCart() {
  const cartContent = document.getElementById("cartContent");
  cartContent.innerHTML = "<h2>Cart</h2>";

  if (cart.length === 0) {
    cartContent.innerHTML += "<p>Cart is empty</p>";
  } else {
    const cartListHTML = cart.map((item) => `
      <li class="cart-item">
        <img src="${item.imageUrl}" alt="${item.product}" class="cart-item-img" />
        <div class="cart-item-details">
          <span class="cart-item-name">${item.product}</span>
          <span class="cart-item-price">EGP${item.price}</span>
        </div>
      </li>`).join("");

    cartContent.innerHTML += `<ul class="cart-list">${cartListHTML}</ul>`;
    cartContent.innerHTML += `<p class="cart-total">Total: $${calculateCartTotal()}</p>`;
  }
}

// Function to update the cart count display
function updateCartCount() {
  document.getElementById("cartCount").innerText = cart.length;
}

// Function to calculate the total cost of items in the cart
function calculateCartTotal() {
  return cart.reduce((total, item) => total + item.price, 0);
}

// Initialize the page and set up event listeners after the DOM is loaded
document.addEventListener("DOMContentLoaded", initializePage);

function initializePage() {
  // Activate the home section by default
  activateMenu("home");

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Add click event listeners to navigation items
  document.querySelectorAll("nav h1").forEach((menuItem) => {
    menuItem.addEventListener("click", function () {
      activateMenu(this.id);
    });
  });
}


let currentIndex = 0;
const offers = document.querySelectorAll('.offer');
const totalOffers = offers.length;

function showOffer(index) {
  offers.forEach((offer, i) => {
    const text = offer.querySelector('.offer-text');
    const img = offer.querySelector('.offer-img');

    text.style.transform = 'translateY(-100px)';
    img.style.transform = i % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)';

    if (i === index) {
      text.classList.add('show-text');
      img.classList.add(i % 2 === 0 ? 'show-img-left' : 'show-img-right');
    } else {
      text.classList.remove('show-text');
      img.classList.remove('show-img-left', 'show-img-right');
    }
  });

  document.querySelector('.panner-offers').style.transform = `translateX(-${index * 100}%)`;
}

function nextOffer() {
  currentIndex = (currentIndex + 1) % totalOffers;
  showOffer(currentIndex);
}

showOffer(currentIndex);
setInterval(nextOffer, 3000);







function activateCategory(category) {
  const sections = document.querySelectorAll(".content-section-two");
  sections.forEach((sec) => {
    sec.style.display = "none";
  });

  const activeSection = document.getElementById("content" + capitalize(category));
  if (activeSection) {
    activeSection.style.display = "flex";
  }

  document.querySelectorAll("nav h2").forEach((item) => {
    item.classList.remove("active");
  });

  const activeMenuItem = document.getElementById("menu" + capitalize(category));
  if (activeMenuItem) {
    activeMenuItem.classList.add("active");
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initially set the "Perfume" section as active
document.addEventListener("DOMContentLoaded", () => {
  activateCategory('perfume');
});
