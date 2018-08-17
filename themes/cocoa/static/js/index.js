elem = document.querySelector("#activeCommento")
elem.addEventListener("click", function() {
    document.querySelector("#commento").classList.remove("hide")
    document.querySelector("#activeCommento").classList.add("hide")
})