// set opacity to all cards but active one
export function cardHoverStyle() {
    const cards = document.querySelectorAll(".js-card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {        
            cards.forEach(card => {
                card.classList.add("m-unavailable");
            });
            card.classList.remove("m-unavailable");
        });
        card.addEventListener("mouseleave", () => {
            cards.forEach(card => {
                card.classList.remove("m-unavailable");
            });
        });
    });       
}