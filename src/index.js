/*===== SELECTORS =====*/
const footerDate = document.querySelector(".copyright__date");

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true, //esta propiedad va a hacer que esto se repita en bucle
});

sr.reveal(".home__title");
sr.reveal(".home__scroll", { delay: 250 });
sr.reveal(".home__img", { origin: "right", delay: 400 });

/*===== DYNAMIC DATE =====*/
function dynamicDate() {
  const date = new Date().getFullYear();

  footerDate.innerHTML = `&copy ${date} Made with love!`;
}
dynamicDate();

/*===== INTERSECTION OBSERVER =====*/

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

//observer
//pd: callback is not defined
let observer = new IntersectionObserver(callbackObserver, options);
//selecting elemet to observe
const juanData = document.querySelector(".about__container");

observer.observe(juanData);

function callbackObserver(entries) {
  console.log(entries[0]);

  if (entries[0].isIntersecting)
    entries[0].target.classList.add("visible-container");
  else entries[0].target.classList.remove("visible-container");
}
