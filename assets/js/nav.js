// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
                            

    const $btn = window['dark-mode-toggle']

    const bodyClassList = document.body.classList
    const storageKey = 'isDarkModeEnabled'
    
    let isEnabled = localStorage.getItem(storageKey)
    
    const update = () => {
        bodyClassList.toggle('dark-mode', isEnabled)
    }
    
    const save = () => {
        if (isEnabled) localStorage.setItem(storageKey, true)
        else localStorage.removeItem(storageKey)
    }
    
    const toggle = () => {
        isEnabled = !isEnabled
    
        update()
        save()
    }
        // Set active link dynamically based on current URL
const navLinks = document.querySelectorAll(".cs-li-link");
const currentUrl = window.location.pathname; // Get the current path (e.g., "/diensten.html")

navLinks.forEach((link) => {
  // Check if the link's href matches the current URL
  if (link.getAttribute("href") === currentUrl) {
    link.classList.add("cs-active");
  } else {
    link.classList.remove("cs-active");
  }

  // Add click listener to dynamically update active class on click
  link.addEventListener("click", () => {
    // Remove the active class from all links
    navLinks.forEach((nav) => nav.classList.remove("cs-active"));

    // Add the active class to the clicked link
    link.classList.add("cs-active");
  });
});
    update()
    
    $btn.addEventListener('click', toggle)
                                    