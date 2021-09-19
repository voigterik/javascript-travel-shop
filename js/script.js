// MODULE IMPORTS
import { loadingModal } from "./modules/loadingModal.js";
import { activeHeaderLink } from "./modules/activeHeaderLink.js";
import { toggleMenu } from "./modules/toggleMenu.js";
import { toggleSearch } from "./modules/toggleSearch.js";
import { getCountries } from "./modules/getCountries.js";
import { showRegions } from "./modules/showRegions.js";
import { cardHoverStyle } from "./modules/cardHoverStyle.js";
import { showBrokenImage } from "./modules/showBrokenImage.js";
import { toggleHeart } from "./modules/toggleHeart.js";
import { cardNumbers } from "./modules/cardNumbers.js";

loadingModal();
activeHeaderLink();
toggleMenu();
toggleSearch();
getCountries()
    .then(() => {
        cardNumbers();  
        setTimeout(() => {
            showBrokenImage();
        }, 3000); 
        cardHoverStyle();
        toggleHeart();
    });
showRegions();

// GLOBAL VARIABLES
const body = document.querySelector("body");

// GET AND DISPLAY CURRENT YEAR
const year = document.querySelector(".js-year");
const date = new Date();
year.innerHTML = date.getFullYear();

// GET WINDOW SIZE 
function getWindowSize(){
    var windowWidth = window.innerWidth;
    return windowWidth;
}
window.onresize = getWindowSize;

// search for destinations
const headerSearch = (searchTerm) => {
    const destinations = document.querySelectorAll(".js-marker");
    destinations.forEach(destination => {
        if(destination.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            destination.parentNode.classList.remove("m-hide");
            
        } else 
            destination.parentNode.classList.add("m-hide");
    });
}
const searchInput = document.querySelector(".js-search-input");
searchInput.addEventListener("input", (e) => {
    headerSearch(e.target.value);
});



function countryNames () {
    const names = document.querySelectorAll("[class*=js-country-]");
    names.forEach(name => {
        if(name.classList.contains("js-country-afghanistan")){
            const image = name.querySelector(".js-image");
            image.src = Object.values(afghanistan);
        }
    });
}
setTimeout(() => {
    countryNames();
}, 5000);

// TEST FOR IMAGES
const afghanistan = {
    src: "https://images.unsplash.com/photo-1583376334098-e8816bf6f8da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
}


