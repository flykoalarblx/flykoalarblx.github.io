// Version 0.0.4

var applyButton = document.getElementById("applyButton")
if (applyButton) {
    applyButton.addEventListener("click", function() {
        document.location = "apply.html"
    })
} else {
    
    document.getElementById("ccapp").addEventListener("click", function() {
        document.location = "https://docs.google.com/forms/d/e/1FAIpQLScmo-1BM7c6umJRMaOC9yTrkmbjx2IIadsl6ZrECnLILuOcWg/viewform?usp=pp_url"
    })
    
}
