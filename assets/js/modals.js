/* [This javascript file consists of all event
* listeners and functions used for the showing
* and hiding of modals and selecting different
* game options]
*/

let submitMessage = document.getElementById('submit-message');

// Hide welcome modal

document.querySelector('.welcome-close').addEventListener('click',
    function () {
        document.querySelector('.welcome-modal').style.display = "None";
    });

// New Game modal functions

// Show New Game modal

document.getElementById("#newGameModal").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "Flex";
    });

// Hide New Game modal and toggle nav bar menu

document.querySelector('.new-game-close').addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

/*
* [This function will run when the player 2
* selection is selected as being a human and
* update the playerTwoComputer variable to be
* false and the buttons class to be active]
*/

document.getElementById('player-two-human').addEventListener('click',
    function () {
        playerTwoComputer = false;
        document.getElementById('player-two-human').classList.add('btn-active');
        document.getElementById('player-two-computer').classList.remove('btn-active');
    });

/*
* [This function will run when the player 2
* selection is selected as being the computer
* and update the playerTwoComputer variable to
* be true and the buttons class to be active]
*/

document.getElementById('player-two-computer').addEventListener('click',
    function () {
        playerTwoComputer = true;
        document.getElementById('player-two-computer').classList.add('btn-active');
        document.getElementById('player-two-human').classList.remove('btn-active');
    });

/* 
* [Event listener for the new game Yes button
* which will accept selections, start a new game
* and toggle nav bar menu]
*/

document.getElementById("new-game-yes").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
        newGame();
    });

/* 
* [Event listener for the new game Cancel button
* which will exit the modal, not start a new game
* and toggle nav bar menu]
*/

document.getElementById("cancel").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

// Help modal functions

// Show Help modal

document.getElementById("#helpModal").addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "Flex";
    });

// Hide Help modal and toggle nav bar menu

document.querySelector('.help-close').addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

// Settings modal functions

// Show Settings modal

document.getElementById("#settingsModal").addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "Flex";
    });

// Hide Settings modal and toggle nav bar menu

document.querySelector('.settings-close').addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

// Function to turn music on

document.getElementById('music-on').addEventListener('click',
    function () {
        music = true;
        document.getElementById('music-on').classList.add('btn-active');
        document.getElementById('music-off').classList.remove('btn-active');
        playMusic();
    });

// Function to turn music off

document.getElementById('music-off').addEventListener('click',
    function () {
        music = false;
        document.getElementById('music-off').classList.add('btn-active');
        document.getElementById('music-on').classList.remove('btn-active');
        pauseMusic();
    });

// Function to turn game sounds on

document.getElementById('sound-on').addEventListener('click',
    function () {
        sounds = true;
        document.getElementById('sound-on').classList.add('btn-active');
        document.getElementById('sound-off').classList.remove('btn-active');
    });

// Function to turn game sounds off

document.getElementById('sound-off').addEventListener('click',
    function () {
        sounds = false;
        document.getElementById('sound-off').classList.add('btn-active');
        document.getElementById('sound-on').classList.remove('btn-active');
    });

// Contact modal functions

// Show Contact modal

document.getElementById("#contactModal").addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "Flex";
    });

document.getElementById("footer-contact").addEventListener('click',
function () {
    document.querySelector('.contact-modal').style.display = "Flex";
});

// Hide Contact modal and toggle nav bar menu

document.querySelector('.contact-close').addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

// Contact submission success modal show

function contactSubmitSuccess () {
    document.querySelector('.contact-submit-modal').style.display = "Flex";
    submitMessage.innerText = "Thank you for your feedback!";
}

// Contact submission error modal show

function contactSubmitError () {
    document.querySelector('.contact-submit-modal').style.display = "Flex";
    submitMessage.innerText = "Oops, something went wrong, please try again";
}

// Hide Contact submit modal 

document.querySelector('.contact-submit-close').addEventListener('click',
    function () {
        document.querySelector('.contact-submit-modal').style.display = "None";
        document.querySelector('.contact-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });


