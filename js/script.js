// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const headerBtn = document.querySelector(".header-btn");

mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  // Change icon based on menu state
  const icon = mobileMenuBtn.querySelector("i");
  if (mainNav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");

    // Clone header button for mobile menu
    if (!document.querySelector(".header-btn.mobile-visible")) {
      const mobileBtn = headerBtn.cloneNode(true);
      mobileBtn.classList.add("mobile-visible");
      mobileBtn.addEventListener("click", () => {
        alert("Get Started button clicked from mobile menu");
        mainNav.classList.remove("active");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        document.body.classList.remove("menu-open");
      });
      mainNav.appendChild(mobileBtn);
    }
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    document.body.classList.remove("menu-open");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !e.target.closest("nav") &&
    !e.target.closest(".mobile-menu-btn") &&
    mainNav.classList.contains("active")
  ) {
    mainNav.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    document.body.classList.remove("menu-open");
  }
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Button click handlers
document
  .querySelectorAll(
    ".header-btn:not(.mobile-visible), .hero-btn, .footer-cta-btn"
  )
  .forEach((button) => {
    button.addEventListener("click", () => {
      alert(
        "Thank you for your interest! This would navigate to the project page in a real implementation."
      );
    });
  });

// Navigation click handlers
document.querySelectorAll("nav li").forEach((item) => {
  item.addEventListener("click", () => {
    alert(`Navigating to ${item.textContent} section`);
    // Close mobile menu if open
    if (mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
      document.body.classList.remove("menu-open");
    }
  });
});

// Footer links click handlers
document.querySelectorAll(".footer-column ul li").forEach((item) => {
  item.addEventListener("click", () => {
    alert(`Navigating to ${item.textContent} page`);
  });
});

// Social icons click handlers
document.querySelectorAll(".social-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const platform = icon
      .querySelector("i")
      .className.split(" ")[1]
      .split("-")[1];
    alert(`Opening Brainwave.io ${platform} page`);
  });
});

// Add click handlers for the service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    // Don't trigger if clicking the link
    if (!e.target.closest(".card-link")) {
      const title = card.querySelector(".card-title").textContent;
      alert(`Would navigate to detailed ${title} page`);
    }
  });
});

// Add click handlers for the "Learn more" links
document.querySelectorAll(".card-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const card = link.closest(".service-card");
    const title = card.querySelector(".card-title").textContent;
    alert(`Navigating to detailed ${title} service page`);
  });
});

// Form submission handler
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  e.target.reset();
});
