// badge numbers auto generated
// rotating images (gallery)

const year = document.querySelector(".js-year");
const cards = document.querySelectorAll(".js-card");
const hearts = document.querySelectorAll(".js-heart");
const menuButton = document.querySelector(".js-menu-button");

// change year
const date = new Date();
year.innerHTML = date.getFullYear();

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
