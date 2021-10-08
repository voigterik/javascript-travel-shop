// GET LIST OF COUNTRIES FROM API
export async function getCountries(){
    try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const countries = await response.json();

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
                        <i class="fa fa-thumbs-up"></i> <span class="js-percent e-percent">${Math.floor(Math.random() * 100)}%</span>
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
    } catch(error) {
        console.log(error);
        const errorContainer = document.createElement("div");
        errorContainer.innerHTML = "Failed to load. Please try again later.";    
        errorContainer.classList.add("b-error-container");    
        document.body.appendChild(errorContainer);
        
    }
}