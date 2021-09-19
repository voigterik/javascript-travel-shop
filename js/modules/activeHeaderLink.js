// add active style to header links
export const activeHeaderLink = () => {
    const headerLinks = document.querySelectorAll(".js-headerLink");
    headerLinks.forEach(link => {
        link.addEventListener("click", () => {
            headerLinks.forEach(activeLink => {
                activeLink.classList.remove("m-active");
            });
            link.classList.add("m-active");
        });
    });
}
