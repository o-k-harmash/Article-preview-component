var cardFooter = document.getElementById("card-footer");
var shareToggleButton = document.getElementById("share-toggle-button");

shareToggleButton.onclick = ((e) => {
    cardFooter.dataset.share = cardFooter.dataset.share === "true"
        ? "false"
        : "true";
});