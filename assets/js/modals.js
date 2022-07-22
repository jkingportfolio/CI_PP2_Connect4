/* 
 * [The modals.js javascript file consists of all event
 * listeners and functions used for the showing
 * and hiding of modals and selecting different
 * game options]
 */

let submitMessage = document.getElementById('submit-message');

/*
 * [This function is used to close the
 * welcome modal]
 */
document.querySelector('.welcome-close').addEventListener('click',
    function () {
        document.querySelector('.welcome-modal').style.display = "None";
    });

/*
 * [This function is used to show the
 * New Game modal]
 */
document.getElementById("new-game-modal-id").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "Flex";
    });

/*
 * [This function is used to close the
 * New Game modal and collapse the Nav Bar]
 */
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

/*
 * [This function is used to show the
 * Help modal]
 */
document.getElementById("help-modal-id").addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "Flex";
    });

/*
 * [This function is used to close the
 * Help modal and collapse the Nav Bar]
 */
document.querySelector('.help-close').addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

/*
 * [This function is used to show the
 * Settings modal]
 */
document.getElementById("settings-modal-id").addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "Flex";
    });

/*
 * [This function is used to close the
 * Setting modal and collapse the Nav Bar]
 */
document.querySelector('.settings-close').addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

/*
 * [This function will turn the in game
 * music on]
 */
document.getElementById('music-on').addEventListener('click',
    function () {
        music = true;
        document.getElementById('music-on').classList.add('btn-active');
        document.getElementById('music-off').classList.remove('btn-active');
        masterMuteUpdate();
        playMusic();
    });

/*
 * [This function will turn the in game
 * music off]
 */
document.getElementById('music-off').addEventListener('click',
    function () {
        music = false;
        document.getElementById('music-off').classList.add('btn-active');
        document.getElementById('music-on').classList.remove('btn-active');
        masterMuteUpdate();
        pauseMusic();
    });

/*
 * [This function will turn game
 * sounds on]
 */
document.getElementById('sound-on').addEventListener('click',
    function () {
        sounds = true;
        document.getElementById('sound-on').classList.add('btn-active');
        document.getElementById('sound-off').classList.remove('btn-active');
        masterMuteUpdate();
    });

/*
 * [This function will turn game
 * sounds ooff]
 */
document.getElementById('sound-off').addEventListener('click',
    function () {
        sounds = false;
        document.getElementById('sound-off').classList.add('btn-active');
        document.getElementById('sound-on').classList.remove('btn-active');
        masterMuteUpdate();
    });

/*
 * [This function is used to show the
 * Contact modal]
 */
document.getElementById("contact-modal-id").addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "Flex";
    });

/*
 * [This function is used to close the
 * Contact modal and collapse the Nav Bar]
 */
document.querySelector('.contact-close').addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });

/*
 * [This function is used to show the
 * Successful feeback submission modal]
 */
function contactSubmitSuccess() {
    document.querySelector('.contact-submit-modal').style.display = "Flex";
    submitMessage.innerText = "Thank you for your feedback!";
}

/*
 * [This function is used to show the
 * Un-successful feeback submission modal]
 */
function contactSubmitError() {
    document.querySelector('.contact-submit-modal').style.display = "Flex";
    submitMessage.innerText = "Ooops, something went wrong. Please try again.";
}

/*
 * [This function is used to close the
 * Contact submit modal and collapse the Nav Bar]
 */
document.querySelector('.contact-submit-close').addEventListener('click',
    function () {
        document.querySelector('.contact-submit-modal').style.display = "None";
        document.querySelector('.contact-modal').style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
    });