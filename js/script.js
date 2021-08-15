/* 
    TODO 
    -----------
    - match clicked header link with cards
    - country search form & function
    - country images
*/

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

// wait for document to be loaded, then remoce modal from DOM
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
        card.classList.add(`js-region-${country.region}`, "js-card", "b-card");

        // card HTML
        card.innerHTML = `
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
            <div class="js-image js-country-${country.alpha3Code} e-image">
                
            </div>
            <div class="js-more-info e-more-info">
                <h5 class="js-country-name">${country.name}</h5>
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

}

getCountries()
    .then(() => {
        cardNumbers();                         
    });

// filter countries
// americas
function showAmericas(){    
    const allCards = document.querySelectorAll(".js-card");
    allCards.forEach(card => {
        card.classList.add("m-hide");
        if(card.classList.contains("js-region-Americas")){
            card.classList.remove("m-hide");
        }                        
    });        
}

const americasLink = document.querySelector(".js-americasLink");
americasLink.addEventListener("click", showAmericas);

// asia
function showAsia(){    
    const allCards = document.querySelectorAll(".js-card");
    allCards.forEach(card => {
        card.classList.add("m-hide");
        if(card.classList.contains("js-region-Asia")){
            card.classList.remove("m-hide");
        }                        
    });        
}

const asiaLink = document.querySelector(".js-asiaLink");
asiaLink.addEventListener("click", showAsia);

// africa
function showAfrica(){    
    const allCards = document.querySelectorAll(".js-card");
    allCards.forEach(card => {
        card.classList.add("m-hide");
        if(card.classList.contains("js-region-Africa")){
            card.classList.remove("m-hide");
        }                        
    });        
}

const africaLink = document.querySelector(".js-africaLink");
africaLink.addEventListener("click", showAfrica);

// europe
function showEurope(){    
    const allCards = document.querySelectorAll(".js-card");
    allCards.forEach(card => {
        card.classList.add("m-hide");
        if(card.classList.contains("js-region-Europe")){
            card.classList.remove("m-hide");
        }                        
    });        
}

const europeLink = document.querySelector(".js-europeLink");
europeLink.addEventListener("click", showEurope);

// oceania
function showOceania(){    
    const allCards = document.querySelectorAll(".js-card");
    allCards.forEach(card => {
        card.classList.add("m-hide");
        if(card.classList.contains("js-region-Oceania")){
            card.classList.remove("m-hide");
        }                        
    });        
}

const oceaniaLink = document.querySelector(".js-oceaniaLink");
oceaniaLink.addEventListener("click", showOceania);


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

const photos = [
    {
        afghanistan: "https://images.unsplash.com/photo-1562620948-7ef06527f430?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
    },
    {
        albania: "https://images.unsplash.com/photo-1562620948-7ef06527f430?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
    }
];

