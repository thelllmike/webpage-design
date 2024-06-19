document.addEventListener("DOMContentLoaded", function() {
    let readMoreBtn = document.querySelector(".card-comment button");
    let commentCards = document.querySelectorAll(".card-comment .row .col-lg-4");
    let currentVisibleCard = 1;

    readMoreBtn.addEventListener("click", function() {
        if (currentVisibleCard < commentCards.length) {
            commentCards[currentVisibleCard].style.display = "block";
            currentVisibleCard++;
        }
        if (currentVisibleCard >= commentCards.length) {
            readMoreBtn.style.display = "none"; // Hide button when all comments are shown
        }
    });
});
