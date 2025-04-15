document.addEventListener("DOMContentLoaded", () => {
    const popupContainer = document.getElementById("popup-container");

    fetch("popup/popup.html")
        .then((response) => response.text())
        .then((html) => {
            popupContainer.innerHTML = html;

            const popup = popupContainer.querySelector(".popup");
            const closeButton = popupContainer.querySelector("#close-button");
            const signupButton = popupContainer.querySelector("#signup-button");

            const focusableElements = popup.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstEl = focusableElements[0];
            const lastEl = focusableElements[focusableElements.length - 1];

            function trapFocus(e) {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstEl) {
                            e.preventDefault();
                            lastEl.focus();
                        }
                    } else {
                        if (document.activeElement === lastEl) {
                            e.preventDefault();
                            firstEl.focus();
                        }
                    }
                }
                if (e.key === 'Escape') {
                    popup.style.display = 'none';
                }
            }

            if (closeButton) {
                closeButton.addEventListener("click", () => {
                    popup.style.display = "none";
                    document.body.removeAttribute("aria-hidden");
                });
            }

            setTimeout(() => {
                popup.style.display = "flex";
                popup.focus(); 
                document.body.setAttribute("aria-hidden", "true"); 
                popup.addEventListener("keydown", trapFocus);
            }, 5000);
        })
        .catch((error) => console.error("Error loading popup:", error));
});
