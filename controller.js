
var applyButton = document.getElementById("applyButton")
if (applyButton) {
    document.getElementById("applyButton").addEventListener("click", function() {
        document.location = "apply.html"
    })
} else {
    document.getElementById("gcapp").addEventListener("click", function() {
        document.location = "https://docs.google.com/forms/d/e/1FAIpQLSeaZ44gbIZObv9ggwBzCQK1sA6nysUUJGNf3QzWu_wsiQlPdQ/viewform?usp=pp_url"
    })
}
