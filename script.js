// -----------------------------
// Page Navigation System
// -----------------------------

// get all pages
const pages = document.querySelectorAll(".page");

// function to show a page
function showPage(pageId) {

  // hide all pages
  pages.forEach(page => {
    page.classList.remove("active");
  });

  // show selected page
  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0); // scroll to top
  }
}

// -----------------------------
// Handle clicks on links
// -----------------------------

document.addEventListener("click", function (e) {

  const link = e.target.closest("[data-page]");
  if (!link) return;

  e.preventDefault();

  const pageId = link.dataset.page;
  showPage(pageId);
});

// -----------------------------
// Load home page initially
// -----------------------------

showPage("home");

// -----------------------------
// Scroll Animation
// -----------------------------

const cards = document.querySelectorAll(".theorem-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});

// -----------------------------
// Make New Cursor Move w Cursor
// -----------------------------
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const links = document.querySelectorAll('a, button');

links.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
  });

  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });

});

const iframes = document.querySelectorAll("iframe");

iframes.forEach(iframe => {
  iframe.addEventListener("mouseenter", () => {
    document.body.classList.add("hide-main-cursor");
  });

  iframe.addEventListener("mouseleave", () => {
    document.body.classList.remove("hide-main-cursor");
  });
});