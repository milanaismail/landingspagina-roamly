document.addEventListener("DOMContentLoaded", () => {
    const popupContainer = document.getElementById("popup-container");

    fetch("popup/popup.html")
        .then((response) => response.text())
        .then((html) => {
            popupContainer.innerHTML = html;

            const popup = popupContainer.querySelector(".popup");
            const closeButton = popupContainer.querySelector("#close-button");

            if (closeButton) {
                closeButton.addEventListener("click", () => {
                    popup.style.display = "none";
                });
            }

            setTimeout(() => {
                popup.style.display = "flex"; 
            }, 5000);
        })
        .catch((error) => console.error("Error loading popup:", error));
});
