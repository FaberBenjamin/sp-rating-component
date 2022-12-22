document.getElementById("submit").addEventListener("click", submitHandler)
let flexContainer = document.getElementById("flex_container")
let thanksContainer = document.getElementById("thanks_container")
let ratingValues = document.querySelectorAll("h2");
ratingValues.forEach(ratingValue => {ratingValue.addEventListener("click", ratingsHandler)}); 

let result = document.getElementById("result")

let numberVariable = 0;

function submitHandler() {
    if (numberVariable != 0){
    flexContainer.classList.add("none");
    thanksContainer.classList.add("flex")
    result.innerHTML = "You selected " + numberVariable + " of 5"
}
}

function ratingsHandler(event){   
numberVariable = Number(event.target.innerHTML)
ratingValues.forEach(ratingValue => {
    ratingValue.classList.remove("selected")
});
this.classList.add("selected")
}