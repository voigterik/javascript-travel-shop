// create loading modal and attach to DOM
export const loadingModal = () => {    
    const body = document.querySelector("body");
    const modal = document.createElement("div");
    const spinner = document.createElement("i");

    spinner.classList.add("fa", "fa-spinner", "fa-pulse", "fa-5x", "fa-fw");
    modal.classList.add("js-modal", "b-modal");
    modal.appendChild(spinner);
    body.appendChild(modal);

    // show modal if document is not ready
    if(document.readyState === "loading"){        
        body. classList.add("m-modal-open");
    } else {
        document.onreadystatechange = () => {
            modal.remove();
            body. classList.remove("m-modal-open");
        }
    }
}