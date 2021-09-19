// toggle search input in header
export const toggleSearch = () => {
    const searchContainer = document.querySelector(".js-search");
    const searchIcon = document.querySelector(".js-search-icon");
    const searchIconClose = document.querySelector(".js-close-search-icon");
    const searchInput = document.querySelector(".js-search-input");
    const header = document.querySelector(".js-header");
    const menuButton = document.querySelector(".js-menu-button");

    searchIcon.addEventListener("click", () => {
        searchContainer.classList.add("m-active");
        searchInput.classList.add("m-active");
        header.classList.add("m-search-open");
    });

    searchIconClose.addEventListener("click", () => {
        searchContainer.classList.remove("m-active");
        searchInput.classList.remove("m-active");
        header.classList.remove("m-search-open");
    });

    






    // function getWindowSize(){
    //     var windowWidth = window.innerWidth;
    //     return windowWidth;
    // }
    // window.onresize = getWindowSize;




    // window.addEventListener("resize", () => {
    //     let windowWidth = window.innerWidth;
    //     const headerMenu = document.querySelector(".js-menu");
    //     if(windowWidth < 767 && header.classList.contains("m-search-open")){
    //         console.log(windowWidth);
    //         menuButton.setAttribute("aria-expanded", "false");
    //         headerMenu.classList.add("m-hide");
    //     } else {
    //         menuButton.setAttribute("aria-expanded", "true");
    //         headerMenu.classList.remove("m-hide");
    //     }
    // });

}