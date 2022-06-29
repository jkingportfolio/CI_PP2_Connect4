document.addEventListener("DOMContentLoaded", function () {

    // Variables

    const cells = document.querySelectorAll('.game-grid span');
    let currentPlayer = 1;
    let playerTwoComputer = true;
    let computerRandomNumber;
    let maxCells = 41;
    let notification = document.getElementById('game-notification');
    let winningCombinations = [
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
    let sounds = false;
    let music = false;
    let gameOver = false;
    // While game active is false, game-notification to display the game type ie PvP PvC
    let gameActive = false;

    newGame();
    // Wipe all occupied counters from the board
    function newGame() {
        gameOver = false;
        for (let i = 0; i < cells.length - 7; i++) {
            cells[i].classList.remove('player-one', 'player-two', 'occupied');
            gameCheck();
        }
    }

    function gameCheck() {
        if (!playerTwoComputer) {
            twoPlayerGame();
        } else {
            onePlayerGame();
        }
    }

    // Game logic for when two human players are playing
    function twoPlayerGame() {
        // Loop through all cell spans, determine whos turn it is, then check if counter placement is valid (2 player)
        for (let i = 0; i < cells.length; i++) {
            cells[i].onclick = () => {
                if (cells[i + 7].classList.contains('occupied') && !cells[i].classList.contains('occupied')) {
                    if (currentPlayer == 1) {
                        cells[i].classList.add('occupied');
                        cells[i].classList.add('player-one');
                        currentPlayer = 2;
                        notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
                    } else if (currentPlayer == 2) {
                        cells[i].classList.add('occupied');
                        cells[i].classList.add('player-two');
                        currentPlayer = 1;
                        notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
                    }
                } else notification.innerHTML = 'Invalid move!';
                winCheck();
            }
        }
    }

    //New onePlayerGame function to try and provide functionality to human vs computer game type
    function onePlayerGame() {
        if (currentPlayer == 1) {
            playerOneTurn();
        } else computerTurn();
    }

    // Player one turn when against the computer
    function playerOneTurn() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].onclick = () => {
                if (cells[i + 7].classList.contains('occupied') && !cells[i].classList.contains('occupied')) {
                    cells[i].classList.add('occupied');
                    cells[i].classList.add('player-one');
                    currentPlayer = 2;
                    notification.innerHTML = `Its Player ${currentPlayer}'s turn!`                    
                } else notification.innerHTML = 'Invalid move!';
                winCheck();
            }
        }
    }

    // Computer turn when playing against computer
    function computerTurn() {
        computerRandomNumber = Math.floor((Math.random() * maxCells));
        console.log(computerRandomNumber);
        if (!cells[computerRandomNumber + 7].classList.contains('occupied') || cells[computerRandomNumber].classList.contains('occupied')) {
            
        } else {
            cells[computerRandomNumber].classList.add('occupied');
            cells[computerRandomNumber].classList.add('player-two');
            currentPlayer = 1;
            notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
        } winCheck();
    }          
    
    // Check board for winning combination
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
                // Add function to end game, restart or quit
                gameOver = true;
                cell1.classList.add('player-one-winner')
                cell2.classList.add('player-one-winner')
                cell3.classList.add('player-one-winner')
                cell4.classList.add('player-one-winner')
                gameEnd();
                // newGame();
            }
            if (
                cell1.classList.contains('player-two') &&
                cell2.classList.contains('player-two') &&
                cell3.classList.contains('player-two') &&
                cell4.classList.contains('player-two')
            ) {
                notification.innerText = ('Player 2 wins');
                // Add function to end game, restart or quit
                gameOver = true;
                cell1.classList.add('player-two-winner')
                cell2.classList.add('player-two-winner')
                cell3.classList.add('player-two-winner')
                cell4.classList.add('player-two-winner')
                gameEnd(cell1, cell2, cell3, cell4);
                // newGame();
            }
        } gameCheck();
    } 

    //Game end
    function gameEnd() {
        if (gameOver) {
            //give option to restart or quit
            //restart will call newGame function wiping board etc
            //quit will display start screen (possibly with a lock on clicking cells)
        }
    }

});


// Modals

document.getElementById("#newGameModal").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "Flex";
    });

document.querySelector('.new-game-close').addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "None";
    });

document.getElementById("#helpModal").addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "Flex";
    });

document.querySelector('.help-close').addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "None";
    });

document.getElementById("#settingsModal").addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "Flex";
    });

document.querySelector('.settings-close').addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "None";
    });

document.getElementById("#contactModal").addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "Flex";
    });

document.querySelector('.contact-close').addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "None";
    });


    // One player game function pre splitting up of functions to try and fix issues with computer players turn
    // function onePlayerGame() {
    //     for (let i = 0; i < cells.length; i++) {
    //         computerRandomNumber = Math.floor(Math.random() * cells.length + 1);
    //         if (currentPlayer = 2) {
    //             if (cells[computerRandomNumber + 7].classList.contains('occupied') && !cells[computerRandomNumber].classList.contains('occupied')) {
    //                 cells[computerRandomNumber].classList.add('occupied');
    //                 cells[computerRandomNumber].classList.add('player-two');
    //                 currentPlayer = 1;
    //                 notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
    //             } else                
    //             winCheck();
    //         } else if (currentPlayer = 1) {
    //             cells[i].onclick = () => {
    //                 if (cells[i + 7].classList.contains('occupied') && !cells[i].classList.contains('occupied')) {
    //                     cells[i].classList.add('occupied');
    //                     cells[i].classList.add('player-two');
    //                     currentPlayer = 2;
    //                     notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
    //                 } else notification.innerHTML = 'Invalid move!';
    //                 winCheck();
    //             }
    //         }
    //     }
    // }