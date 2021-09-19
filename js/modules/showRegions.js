// SHOW REGIONS ACCORDING TO CLICKED HEADER LINK
export function showRegions() {

    // show all
    const allCountriesLink = document.querySelector(".js-allLink");
    allCountriesLink.addEventListener("click", () => {
        const allCards = document.querySelectorAll(".js-card");
        allCards.forEach(card => {
            card.classList.remove("m-hide");                              
        });  
    });

    // show regions
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
}