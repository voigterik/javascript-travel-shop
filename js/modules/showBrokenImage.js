// check if images are loaded, show "No Image" image if not
export function showBrokenImage() {
    const images = document.querySelectorAll(".js-image img");
    images.forEach(image => {
        if(image.offsetHeight === 0){
            image.parentNode.classList.add("m-broken-image");
        } 
    });
}