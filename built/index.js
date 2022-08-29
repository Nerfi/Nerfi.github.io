/*===== SELECTORS =====*/
const footerDate2 = document.querySelector(".copyright__date");
const myButton = document.getElementById("myBtn");
/*===== MENU SHOW =====*/
const showMenu2 = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu2("nav-toggle", "nav-menu");
/*===== REMOVE MENU MOBILE =====*/
const navLink2 = document.querySelectorAll(".nav__link");
function linkAction2() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}
navLink2.forEach((n) => n.addEventListener("click", linkAction2));
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]"); //https://stackoverflow.com/questions/58773652/ts2339-property-style-does-not-exist-on-type-element
window.addEventListener("scroll", scrollActive);
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]") // https://stackoverflow.com/questions/55588968/type-error-object-is-possibly-null-ts2531-for-window-document
                .classList.add("active");
        }
        else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    });
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr2 = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true, //esta propiedad va a hacer que esto se repita en bucle
});
sr2.reveal(".home__title");
sr2.reveal(".home__scroll", { delay: 250 });
sr2.reveal(".home__img", { origin: "right", delay: 400 });
/*===== DYNAMIC DATE =====*/
function dynamicDate() {
    const date = new Date().getFullYear();
    footerDate2.innerHTML = `&copy ${date} Made with love!`;
}
dynamicDate();
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
};
//observer
let observer = new IntersectionObserver(callbackObserver, options);
//selecting elemet to observe
const juanData = document.querySelector(".about__container");
observer.observe(juanData);
function callbackObserver(entries) {
    if (entries[0].isIntersecting)
        entries[0].target.classList.add("visible-container");
    else
        entries[0].target.classList.remove("visible-container");
}
//skills section observe
const skillsContainer = document.querySelector(".skills__container");
let skillsObserver = new IntersectionObserver(callbackObserver, options);
skillsObserver.observe(skillsContainer);
//
//portofolio section observer
const portofolioContainer = document.querySelector(".portfolio__container");
const portofolioObserver = new IntersectionObserver(callbackObserver, options);
portofolioObserver.observe(portofolioContainer);
//when user scroolls down 20px from the top of the document, show the button 
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
});
// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", topFunction);
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
