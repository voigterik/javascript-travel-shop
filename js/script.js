const body = document.querySelector("body");

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
        console.log(target);
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
    const badges = document.querySelectorAll(".e-badge");  
    let number = 1;  
    badges.forEach(badge => {        
        badge.textContent = number++;
    });
}
cardNumbers();
