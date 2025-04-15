// Add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function () {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

// Checks the value of aria-expanded on the cs-ul and changes it
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// Mobile nav dropdown toggle
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    }
    item.addEventListener('click', onClick);
}

// Set active link dynamically based on current URL
const navLinks = document.querySelectorAll(".cs-li-link");
const currentUrl = window.location.pathname;

navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
        link.classList.add("cs-active");
    } else {
        link.classList.remove("cs-active");
    }

    link.addEventListener("click", () => {
        navLinks.forEach((nav) => nav.classList.remove("cs-active"));
        link.classList.add("cs-active");
    });
});
