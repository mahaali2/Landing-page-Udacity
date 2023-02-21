// global 
const mainNavigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

// arry to create nav bar 
const sectionLinks = ['section1', 'section2', 'section3', 'section4'];
// function to create nav bar links 
function createNav() {
  const navItems = sectionLinks.map(link => `<li> <a class="menu__link " href="#${link}" >${link} </a></li>`);
  mainNavigation.innerHTML = navItems.join('');
};
createNav();




// adding active class for any sedtion by click 
document.addEventListener("DOMContentLoaded", function () {
  sections.forEach(section => {
    section.addEventListener('click', function () {
      sections.forEach(s => {
        if (s !== section) {
          s.classList.remove("your-active-class");
        }
      });
      section.classList.toggle("your-active-class");
    });
  });
});

// function to make behavior smooth
const navLinks = document.querySelectorAll(".menu__link");
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: "smooth"
    });
  });
});
// add active class to links 
const links = document.querySelectorAll('.menu__link');
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
