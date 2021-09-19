// generate card numbers
export const cardNumbers = () => {
    const badges = document.querySelectorAll(".js-badge");  
    let number = 1;  
    badges.forEach(badge => {        
        badge.textContent = number++;
    });
}