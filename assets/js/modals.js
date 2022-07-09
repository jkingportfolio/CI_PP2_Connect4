/* [This javascript file consists of all event
* listeners and functions used for the showing
* and hiding of modals and selecting different
* game options]
*/

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

function playerTwoSelectHuman() {
    playerTwoComputer = false;
    document.getElementById('player-two-human').classList.add('btn-active');
    document.getElementById('player-two-computer').classList.remove('btn-active');
    console.log(playerTwoComputer);
}

/*
* [This function will run when the player 2
* selection is selected as being the computer
* and update the playerTwoComputer variable to
* be true and the buttons class to be active]
*/

function playerTwoSelectComputer() {
    playerTwoComputer = true;
    document.getElementById('player-two-computer').classList.add('btn-active');
    document.getElementById('player-two-human').classList.remove('btn-active');
    console.log(playerTwoComputer);
}

/* 
* [Event listener for the new game Yes button
* which will accept selections, start a new game
* and toggle nav bar menu]
*/

document.getElementById("new-game-yes").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

/* 
* [Event listener for the new game Cancel button
* which will exit the modal, not start a new game
* and toggle nav bar menu]
*/

function cancel() {
    document.querySelector('.new-game-modal').style.display = "None";
    document.getElementById('toggleMobileMenu').classList.remove('show');
}

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

function musicOn() {
    music = true;
    document.getElementById('music-on').classList.add('btn-active');
    document.getElementById('music-off').classList.remove('btn-active');
    console.log(music);
}

// Function to turn music off

function musicOff() {
    music = false;
    document.getElementById('music-off').classList.add('btn-active');
    document.getElementById('music-on').classList.remove('btn-active');
    console.log(music);
}

// Function to turn game sounds on

function soundOn() {
    sounds = true;
    document.getElementById('sound-on').classList.add('btn-active');
    document.getElementById('sound-off').classList.remove('btn-active');
    console.log(sounds);
}

// Function to turn game sounds off

function soundOff() {
    sounds = false;
    document.getElementById('sound-off').classList.add('btn-active');
    document.getElementById('sound-on').classList.remove('btn-active');
    console.log(sounds);
}

// Contact modal functions

// Show Contact modal

document.getElementById("#contactModal").addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "Flex";
    });

// Hide Contact modal and toggle nav bar menu

document.querySelector('.contact-close').addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });
