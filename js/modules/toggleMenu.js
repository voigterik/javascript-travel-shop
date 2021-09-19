export const toggleMenu = () => {
    const menuButton = document.querySelector(".js-menu-button");
    menuButton.addEventListener("click", () => {
        let state = menuButton.getAttribute("aria-expanded") === "true" || false;
        menuButton.setAttribute("aria-expanded", !state);
    });
}