// Welcome modal (shown when first visit to page)

// Wait for dom to load and then open Welcome modal

let welcomeCount = 0;

document.addEventListener("DOMContentLoaded", function () {
    if (welcomeCount == 0) {
        document.querySelector('.welcome-modal').style.display = "Flex";
        welcomeCount += 1;
    } else if (document.referrer == 'https://jkingportfolio.github.io/CI_PP2_Connect4/404.html'){
        document.querySelector('.welcome-modal').style.display = "None";
    }
});