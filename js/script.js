const body = document.querySelector("body");

// header links
const headerLinks = document.querySelectorAll(".js-headerLink");

// card items
const cards = document.querySelectorAll(".js-card");
const hearts = document.querySelectorAll(".js-heart");
const menuButton = document.querySelector(".js-menu-button");

// get current year
const year = document.querySelector(".js-year");
const date = new Date();
year.innerHTML = date.getFullYear();

// create loading modal and attach to DOM
const loadingModal = () => {    
    const modal = document.createElement("div");
    const spinner = document.createElement("i");

    spinner.classList.add("fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw");
    modal.classList.add("js-modal", "b-modal");
    modal.appendChild(spinner);
    body.appendChild(modal);
}
loadingModal();

// check if modal is visible and attach class to body if so
const modalVisible = () => {
    if(loadingModal){
        body. classList.add("m-modal-open");
    } 
}
modalVisible();

// wait for document to be loaded, then remove modal from DOM
window.onload = function(){    
    body.classList.remove("m-modal-open");
    const modal = document.querySelector(".js-modal");
    modal.remove();
};

// toggle menu
const toggleMenu = (button) => {
    
    // toggle aria-expanded between "false" and "true"
    let state = button.currentTarget.getAttribute("aria-expanded") === "true" || false;
    menuButton.setAttribute("aria-expanded", !state);
    console.log(menuButton);
}
menuButton.addEventListener("click", toggleMenu);

// toggle search input in header
const toggleSearch = () => {
    const searchContainer = document.querySelector(".js-search");
    const searchIcon = document.querySelector(".js-search-icon");
    const searchIconClose = document.querySelector(".js-close-search-icon");
    const searchInput = document.querySelector(".js-search-input");

    searchIcon.addEventListener("click", () => {
        searchContainer.classList.add("m-active");
        searchInput.classList.add("m-active");
    });

    searchIconClose.addEventListener("click", () => {
        searchContainer.classList.remove("m-active");
        searchInput.classList.remove("m-active");
    });

}
toggleSearch();

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

// get list of countries from API
async function getCountries(){
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await response.json();

    // console.log(countries);
    countries.forEach(country => {

        // get languages 
        const languages = [];
        for (let value of Object.values(country.languages)) {
            languages.push(value.name);
        }

        // get currency
        const currency = [];
        for (let value of Object.values(country.currencies)) {
            currency.push(value.code);
        }

        // create card HTML
        const card = document.createElement("div");
        card.classList.add(`js-region-${country.region.toLowerCase()}`, "js-card", "b-card");

        // card HTML
        card.innerHTML = `
            <div class="js-marker e-marker">${country.region.toLowerCase()} ${country.name.toLowerCase()}</div>
            <span class="js-badge e-badge"></span>
            <div class="js-hover-container e-hover-container"></div>
            <div class="js-extra e-extra">
                <i class="fa fa-2x fa-youtube-play"></i>
                <i class="js-heart fa fa-lg fa-heart-o"></i>
                <span class="js-rating e-rating">
                    <span class="js-rating-text e-rating-text">Rated</span>
                    <i class="fa fa-thumbs-up"></i> <span class="js-percent e-percent">79%</span>
                </span>
            </div>
            <div class="js-image js-country-${country.name.toLowerCase()} e-image">
                <img 
                    src="https://images.unsplash.com/photo-1629477091314-7196cc5395f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" 
                    alt="" 
                    class="js-image"                    
                />
            </div>
            <div class="js-more-info e-more-info">
                <h5 class="js-name">${country.name}</h5>
                <div class="e-info-table">
                    <span class="m-bold">Capital:</span> <span>${country.capital}</span>
                    <span class="m-bold">Currency:</span> <span>${currency.join(", ")}</span>
                    <span class="m-bold">Language:</span> <span>${languages.slice(0, 2).join(", ")}</span>
                    <span class="m-bold">Region:</span> <span>${country.region}</span>
                </div>
                <button class="js-button b-button m-blue">More</button>
            </div>
            <div class="js-quick-info e-quick-info">
                <span class="js-location e-location">${country.name}</span>
                <img src="${country.flag}" alt="Flag" class="e-flag" />
            </div>
        `;

        const grid = document.querySelector(".js-grid");
        grid.appendChild(card);        
    });
    // loadingModal();
}

getCountries()
    .then(() => {
        cardNumbers();  
        setTimeout(() => {
            showBrokenImage();
        }, 3000);        
    });

// add active style to header links
const activeHeaderLink = (link) => {
    link.addEventListener("click", () => {
        headerLinks.forEach(headerLink => {
            headerLink.classList.remove("m-active");
        });
        link.classList.add("m-active");
    });
}
headerLinks.forEach(activeHeaderLink);

// filter countries
// show all
function showAllCountries(){    
    const allCards = document.querySelectorAll(".js-card");
    allCards.forEach(card => {
        card.classList.remove("m-hide");                              
    });        
}

const allCountriesLink = document.querySelector(".js-allLink");
allCountriesLink.addEventListener("click", showAllCountries);

// show regions matching clicked header link
const regionsLinks = document.querySelectorAll(".js-regionLink");
regionsLinks.forEach(link => {
    link.addEventListener("click", () => {
        const allMarkers = document.querySelectorAll(".js-marker");
        allMarkers.forEach(marker => {
            if(marker.innerText.includes(link.innerText.toLowerCase())){
                marker.parentNode.classList.remove("m-hide");
            } else
                marker.parentNode.classList.add("m-hide");
        });        
    });
});

// set opacity to all cards but active one
const hoverStyle = (target) => {
    target.addEventListener("mouseover", function () {
        cards.forEach(function (card) {
            card.classList.add("m-unavailable");
            target.classList.remove("m-unavailable");
        });
    });
    target.addEventListener("mouseleave", function () {
        cards.forEach(function (card) {
            card.classList.remove("m-unavailable");
        });
    });
}
cards.forEach(hoverStyle);

// fill heart icons with solid color when clicked
const toggleHeart = (target) => {
    target.addEventListener("click", function () {
        if (target.classList.contains("fa-heart-o")) {
            target.classList.remove("fa-heart-o");
            target.classList.add("fa-heart");
            target.classList.toggle("m-liked");
        } else {
            target.classList.add("fa-heart-o");
            target.classList.remove("fa-heart");
            target.classList.toggle("m-liked");            
        }
    });
}
hearts.forEach(toggleHeart);

// generate card numbers
const cardNumbers = () => {
    const badges = document.querySelectorAll(".js-badge");  
    let number = 1;  
    badges.forEach(badge => {        
        badge.textContent = number++;
    });
}

// check if images are loaded, show "No Image" image if not
function showBrokenImage() {
    const images = document.querySelectorAll(".js-image img");
    images.forEach(image => {
        if(image.offsetHeight === 0){
            image.parentNode.classList.add("m-broken-image");
        } 
    });
}

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


