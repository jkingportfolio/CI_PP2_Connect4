/*
 * [The connect-4.js file is the main JavaScript file of the project
 * which is used by index.html]
 */

// Onload run newGame function with default variable values
document.addEventListener("DOMContentLoaded", function () {
    newGame();
});

// Constant values for the game grid cells
const cells = document.querySelectorAll('.game-grid span');
const winningCombinations = [
    //horizontal
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    //vertical
    [0, 7, 14, 21],
    [7, 14, 21, 28],
    [14, 21, 28, 35],
    [1, 8, 15, 22],
    [8, 15, 22, 29],
    [15, 22, 29, 36],
    [2, 9, 16, 23],
    [9, 16, 23, 30],
    [16, 23, 30, 37],
    [3, 10, 17, 24],
    [10, 17, 24, 31],
    [17, 24, 31, 38],
    [4, 11, 18, 25],
    [11, 18, 25, 32],
    [18, 25, 32, 39],
    [5, 12, 19, 26],
    [12, 19, 26, 33],
    [19, 26, 33, 40],
    [6, 13, 20, 27],
    [13, 20, 27, 34],
    [20, 27, 34, 41],
    //diagonal right to left
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [17, 23, 29, 35],
    [18, 24, 30, 36],
    [19, 25, 31, 37],
    [20, 26, 32, 38],
    //diagonal left to right
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [10, 18, 26, 34],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [16, 24, 32, 40],
    [17, 25, 33, 41],
];

// Game Variables
let currentPlayer = 1;
let playerTwoComputer = true;
let computerRandomNumber;
let maxCells = 41;
let notification = document.getElementById('game-notification');
let soundEffect = new Audio();
let invalidMoveSound = new Audio();
let winnerSound = new Audio();
let sounds = false;
let musicFile = new Audio();
let music = false;
let gameActive = false;
let warningCount = 0;
let playerOneWins = 0;
let playerTwoWins = 0;
let newGameButton = document.getElementById("new-game-button");
let orientationModal = document.querySelector('.orientation-warning-modal')
let musicButton = document.getElementById('music-button');

/* 
 * [This function is used to revert all grid cells to empty,
 * update the notification text to prompt for the
 * correct game move and set correct animation class]
 */
function newGame() {
    currentPlayer = 1;
    for (let i = 0; i < cells.length - 7; i++) {
        cells[i].classList.remove('player-one', 'player-two', 'occupied', 'player-one-winner', 'player-two-winner', 'disable-click');
        cells[i].innerText = "";
        notification.classList.remove('winner');
        notification.classList.add('wobble');
        newGameButton.style.display = "none";
        if (gameActive) {
            notification.innerText = `Its Player ${currentPlayer}'s turn!`;
        } else {
            notification.innerText = `Click to play!`;
        }
        notificationColour();
        gameCheck();
    }
}

/*
 * [This function will check if the second player of the
 * game is a human or computer player then call the relevant
 * function to continue the game]
 */
function gameCheck() {
    if (!playerTwoComputer) {
        notificationColour()
        twoPlayerGame();
    } else {
        notificationColour()
        onePlayerGame();
    }
}

/*
 * [This is the main function for a 2 player game against
 * two human players. This function will first loop through
 * all game board cells and listen for a click on a cell and
 * determine whos turn it is. If the cell is available and 
 * there is an occupied cell below it, the relevant classed will
 * be added to the cell and the currentPlayer will change]
 */
function twoPlayerGame() {
    // Loop through all cell spans, determine whos turn it is, then check if counter placement is valid (2 player)
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = () => {
            if (cells[i + 7].classList.contains('occupied') && !cells[i].classList.contains('occupied')) {
                if (currentPlayer == 1) {
                    cells[i].classList.add('occupied');
                    cells[i].classList.add('player-one');
                    cells[i].innerText = '1';
                    currentPlayer = 2;
                    notification.innerText = `Its Player ${currentPlayer}'s turn!`;
                    playCounterSound()
                } else if (currentPlayer == 2) {
                    cells[i].classList.add('occupied');
                    cells[i].classList.add('player-two');
                    cells[i].innerText = '2';
                    currentPlayer = 1;
                    notification.innerText = `Its Player ${currentPlayer}'s turn!`;
                    playCounterSound()
                }
            } else {
                notification.innerText = 'Invalid move!';
                playInvalidSound()
                window.navigator.vibrate(300);
                notificationColour();

            }
            winCheck();
        };
    }
}

/*
 * [This is the main function for a 1 player game against
 * a computer opponent. Once it has been determined whos
 * turn it is, the relevant function will then be called]
 */
function onePlayerGame() {
    if (currentPlayer == 1) {
        playerOneTurn();
    } else setTimeout(computerTurn, 300);
    notificationColour();
}

/*
 * [This function will first remove the disable-click class
 * from all cells and allow player one to take their turn. 
 * The function will then loop through all game board cells 
 * and listen for a click on a cell. If the cell is available 
 * and there is an occupied cell below it, the relevant classed 
 * will be added to the cell and the currentPlayer will change]
 */
function playerOneTurn() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('disable-click');
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = () => {
            notification.classList.remove('wobble');
            if (cells[i + 7].classList.contains('occupied') && !cells[i].classList.contains('occupied')) {
                cells[i].classList.add('occupied');
                cells[i].classList.add('player-one');
                cells[i].innerText = '1';
                currentPlayer = 2;
                notification.innerText = `Its Player ${currentPlayer}'s turn!`;
                playCounterSound()
            } else {
                notification.innerText = 'Invalid move!';
                playInvalidSound()
                window.navigator.vibrate(300);
            }
            winCheck();
        };
    }
}

/*
 * [This function will randomly generated a cell for the computer
 * to play its counter. Whilst this is happening a class of disabled
 * click will be added to all cells so player one cannot place extra
 * counters. If a cell has an occupied cell below it and the selected
 * cell is not occupied a computer player counter will be placed and
 * turn is changed to player one]
 */
function computerTurn() {
    computerRandomNumber = Math.floor((Math.random() * maxCells));
    console.log(computerRandomNumber);
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add('disable-click');
    }
    if (!cells[computerRandomNumber + 7].classList.contains('occupied') || cells[computerRandomNumber].classList.contains('occupied')) {

    } else {
        cells[computerRandomNumber].classList.add('occupied');
        cells[computerRandomNumber].classList.add('player-two');
        cells[computerRandomNumber].innerText = '2';
        currentPlayer = 1;
        notification.innerText = `Its Player ${currentPlayer}'s turn!`;
        playCounterSound()
    }
    winCheck();
}

/*
 * [This function checks all occupied cells against all
 * winning combinations. If there is a match the game ends
 * and displays the winner. Current player is swapped back
 * to player one to stop the computer taking an extra turn
 * after a winner has been declared]
 */
function winCheck() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const cell1 = cells[winningCombinations[i][0]];
        const cell2 = cells[winningCombinations[i][1]];
        const cell3 = cells[winningCombinations[i][2]];
        const cell4 = cells[winningCombinations[i][3]];

        if (
            cell1.classList.contains('player-one') &&
            cell2.classList.contains('player-one') &&
            cell3.classList.contains('player-one') &&
            cell4.classList.contains('player-one')
        ) {
            notification.innerText = ('Player 1 wins');
            notification.classList.add('winner');
            cell1.classList.add('player-one-winner');
            cell2.classList.add('player-one-winner');
            cell3.classList.add('player-one-winner');
            cell4.classList.add('player-one-winner');
            currentPlayer = 1;
            playerOneWins = playerOneWins + 1;
            console.log('playerOneWins');
            document.getElementById('player-one-wins').innerText = `Player 1 wins: ${playerOneWins}`
            newGameButton.style.display = "flex";
            gameEnd();
        }
        if (
            cell1.classList.contains('player-two') &&
            cell2.classList.contains('player-two') &&
            cell3.classList.contains('player-two') &&
            cell4.classList.contains('player-two')
        ) {
            notification.innerText = ('Player 2 wins');
            notification.classList.add('winner');
            cell1.classList.add('player-two-winner');
            cell2.classList.add('player-two-winner');
            cell3.classList.add('player-two-winner');
            cell4.classList.add('player-two-winner');
            currentPlayer = 1;
            playerTwoWins = playerTwoWins + 1;
            document.getElementById('player-two-wins').innerText = `Player 2 wins: ${playerTwoWins}`;
            newGameButton.style.display = "flex";
            gameEnd();
        } // Insert if statment for draw
    }
    gameCheck();
}

/*
 * [This function will loop through all cells and mark them
 * as occupied so that no further counters can be placed and
 * continue to show the winning 4 in a row. These will remain
 * until a new game is started with the New Game button]
 */
function gameEnd() {
    gameActive = false;
    playWinnerSound();
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.add('occupied');
        notification.classList.remove('invalid-animation');
        notification.classList.remove('player-one-turn');
        notification.classList.remove('player-two-turn');
    }
}

// New Game button which when pressed calls the newGame function
newGameButton.addEventListener('click',
    function () {
        newGame();
    });

/*
 * [This function is used to control the classes assigned to the
 *notifiction bar. This will then display the correct animation
 * for the revalent turn or notification]
 */
function notificationColour() {
    if (notification.innerText === "Its Player 1's turn!") {
        notification.classList.remove('invalid-animation');
        notification.classList.remove('player-two-turn');
        notification.classList.add('player-one-turn');
    } else if (notification.innerText === "Its Player 2's turn!") {
        notification.classList.remove('invalid-animation');
        notification.classList.remove('player-one-turn');
        notification.classList.add('player-two-turn');
    } else if (notification.innerText === "Invalid move!") {
        notification.classList.remove('player-one-turn');
        notification.classList.remove('player-two-turn');
        notification.classList.remove('animated-text');
        notification.classList.add('invalid-animation');
    } else {
        notification.classList.remove('invalid-animation');
        notification.classList.remove('player-one-turn');
        notification.classList.remove('player-two-turn');
    }
}

// Function to play counter sound on click
function playCounterSound() {
    if (!sounds) return;
    console.log('it should play a sound');
    soundEffect.src = 'assets/sounds/counter-drop.mp3';
    soundEffect.play();
}

// Function to play invalid sound on click

function playInvalidSound() {
    if (!sounds) return;
    console.log('it should play an invalid sound');
    invalidMoveSound.src = 'assets/sounds/invalid-move.mp3';
    invalidMoveSound.play();
}

function playWinnerSound() {
    if (!sounds) return;
    console.log('it should play a winning sound');
    winnerSound.src = 'assets/sounds/winner.mp3';
    winnerSound.play();
}

// Function to play music when music = true

function playMusic() {
    if (!music) return;
    console.log('it should play music');
    musicFile.src = 'assets/sounds/game-music.mp3';
    musicFile.play();
    // document.getElementById('music-button').src = '../assets/images/sound-on-icon.png';
}

// Function to stop music when music = false

function pauseMusic() {
    if (music) return;
    console.log('it should stop music');
    musicFile.src = 'assets/sounds/game-music.mp3';
    musicFile.pause();
    // document.getElementById('music-button').src = '../assets/images/sound-off-icon.png';
}

// Function to toggle music on off via main display icon

musicButton.addEventListener('click',
    function () {
        if (music) {
            music = false;   
            sounds = false;         
            document.getElementById('music-button-image').src = 'assets/images/sound-off-icon.png';
            document.getElementById('music-off').classList.add('btn-active');
            document.getElementById('music-on').classList.remove('btn-active');
            document.getElementById('sound-off').classList.add('btn-active');
            document.getElementById('sound-on').classList.remove('btn-active');
            pauseMusic();
        } else {
            music = true;
            sounds = true;
            document.getElementById('music-button-image').src = 'assets/images/sound-on-icon.png';
            document.getElementById('music-on').classList.add('btn-active');
            document.getElementById('music-off').classList.remove('btn-active');
            document.getElementById('sound-on').classList.add('btn-active');
            document.getElementById('sound-off').classList.remove('btn-active');
            playMusic();
        }
    });

/*
 * [This function will listen for the orientation to be
 * landscape and warn the user that the game is best played
 * in portrait mode. A warning count will be added which if
 * is greater than 0 will not show the warning again]
 */

window.addEventListener("orientationchange", function () {
    if (warningCount === 0 && window.orientation == 90 || window.orientation == -90) {
        orientationModal.style.display = "Flex";
    } else if (window.innerHeight > 768){
        orientationModal.style.display = "None";
        console.log(window.innerHeight);
    }
});

// Warning Close button listener
document.querySelector('.warning-close').addEventListener('click',
    function () {
        orientationModal.style.display = "None";
        document.getElementById('toggleMobileMenu').classList.remove('show');
        warningCount += 1;
    });

// New Game button listener

newGameButton.addEventListener('click',
    function () {
        newGame();
    });