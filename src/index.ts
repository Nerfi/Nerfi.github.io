/*===== SELECTORS =====*/
const footerDate2 = document.querySelector(
  ".copyright__date"
) as HTMLParagraphElement;

const myButton = document.getElementById("myBtn") as HTMLButtonElement;

/*===== MENU SHOW =====*/
export const showMenu2 = (toggleId: string, navId: string): void => {
  const toggle = document.getElementById(toggleId) as HTMLDivElement;
  const nav = document.getElementById(navId) as HTMLDivElement;

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu2("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/

export const navLink2 = document.querySelectorAll(
  ".nav__link"
) as NodeListOf<HTMLAnchorElement>;

export function linkAction2(): void {
  const navMenu = document.getElementById("nav-menu") as HTMLDivElement;
  navMenu.classList.remove("show");
}
navLink2.forEach((n) => n.addEventListener("click", linkAction2));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll<HTMLElement>("section[id]"); //https://stackoverflow.com/questions/58773652/ts2339-property-style-does-not-exist-on-type-element
window.addEventListener("scroll", scrollActive);

function scrollActive(): void {
  const scrollY: number = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")! // https://stackoverflow.com/questions/55588968/type-error-object-is-possibly-null-ts2531-for-window-document
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")!
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
export function dynamicDate(): void {
  const date: number = new Date().getFullYear();

  footerDate2.innerHTML = `&copy ${date} Made with love!`;
}
dynamicDate();

/*===== INTERSECTION OBSERVER =====*/

// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php

interface Options {
  root: null;
  rootMargin: string;
  threshold: number;
}

let options: Options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

//observer
let observer: IntersectionObserver = new IntersectionObserver(
  callbackObserver,
  options
);
//selecting elemet to observe
const juanData = document.querySelector(".about__container") as HTMLDivElement;

observer.observe(juanData);

function callbackObserver(entries) {
  if (entries[0].isIntersecting)
    entries[0].target.classList.add("visible-container");
  else entries[0].target.classList.remove("visible-container");
}

//skills section observe
const skillsContainer = document.querySelector(
  ".skills__container"
) as HTMLDivElement;
let skillsObserver: IntersectionObserver = new IntersectionObserver(
  callbackObserver,
  options
);
skillsObserver.observe(skillsContainer);
//

//portofolio section observer
const portofolioContainer = document.querySelector(
  ".portfolio__container"
) as HTMLDivElement;
const portofolioObserver: IntersectionObserver = new IntersectionObserver(
  callbackObserver,
  options
);
portofolioObserver.observe(portofolioContainer);


//when user scroolls down 20px from the top of the document, show the button 

window.addEventListener("scroll", () => {
   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
})

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener("click", topFunction);

function topFunction(): void {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}