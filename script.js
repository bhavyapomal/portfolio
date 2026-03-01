// Spotlight effect
if (window.matchMedia("(min-width: 1024px)").matches) {
  document.body.classList.add("spotlight");
  document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
    document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
  });
}

// Navigation active state
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNav() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNav);

// Smooth scroll
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Initialize first nav item as active
if (navLinks.length > 0) {
  navLinks[0].classList.add("active");
}

// Optional: Theme toggle function (uncomment to use)
/*
        function toggleTheme() {
            const body = document.body;
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.setAttribute('data-theme', savedTheme);
        */
var cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});