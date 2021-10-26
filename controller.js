// Version 0.0.1

var applyButton = document.getElementById("applyButton")
if (applyButton) {
    applyButton.addEventListener("click", function() {
        document.location = "apply.html"
    })
} else {
    document.getElementById("gcapp").addEventListener("click", function() {
        document.location = "https://docs.google.com/forms/d/e/1FAIpQLSeaZ44gbIZObv9ggwBzCQK1sA6nysUUJGNf3QzWu_wsiQlPdQ/viewform?usp=pp_url"
    })
    document.getElementById("ccapp").addEventListener("click", function() {
        document.location = "https://docs.google.com/forms/d/e/1FAIpQLScmo-1BM7c6umJRMaOC9yTrkmbjx2IIadsl6ZrECnLILuOcWg/viewform?usp=pp_url"
    })
}
