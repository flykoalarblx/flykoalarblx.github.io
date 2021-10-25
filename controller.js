var currentPageName = window.location.pathname.split("/").pop();
console.log(currentPageName)
if (currentPageName == "index.html") {
    document.getElementById("applyButton").addEventListener("click", function() {
        document.location = "apply.html"
    })
} else if (currentPageName == "apply.html") {
    document.getElementById("gcapp").addEventListener("click", function() {
        document.location = "https://docs.google.com/forms/d/e/1FAIpQLSeaZ44gbIZObv9ggwBzCQK1sA6nysUUJGNf3QzWu_wsiQlPdQ/viewform?usp=pp_url"
    })
}
