// fill heart icons with solid color when clicked
export function toggleHeart(){
    const hearts = document.querySelectorAll(".js-heart");
    hearts.forEach(heart => {
        heart.addEventListener("click", () => {
            if (heart.classList.contains("fa-heart-o")) {
                    heart.classList.remove("fa-heart-o");
                    heart.classList.add("fa-heart");
                    heart.classList.toggle("m-liked");
                } else {
                    heart.classList.add("fa-heart-o");
                    heart.classList.remove("fa-heart");
                    heart.classList.toggle("m-liked");            
                }
            });
    });
}
