// SEARCH FOR DESTINATIONS
export const destinationSearch = (searchTerm) => {
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
    destinationSearch(e.target.value);
});