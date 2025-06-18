let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;
let gameOver = false;
let board = [];
let rows = 6;
let columns = 7;
let currColumns = [];
let drawflag = 0;

window.onload = function () {
    setGame();
}

function setGame() {
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            row.push(' ');
            let tile = document.createElement("div");
            tile.id = r + "-" + c;
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").appendChild(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    let winSound = new Audio('./sounds/pop-sound-effect-197846.mp3');
    winSound.play();
    let turntxt = document.getElementById("Turns");
    if (gameOver) return;

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currColumns[c];
    if (r < 0) return;
    drawflag++;


    board[r][c] = currPlayer;
    let tile = document.getElementById(r + "-" + c);

    if (currPlayer === playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerYellow;
        turntxt.innerHTML = 'Player Yellow Turn';
        turntxt.style.color = '#fdf900';
        turntxt.style.textShadow = '1px 1px 5px #000, -1px -1px 5px #000';
    } else {
        tile.classList.add("yellow-piece");
        currPlayer = playerRed;
        turntxt.innerHTML = 'Player Red Turn';
        turntxt.style.color = '#ca2020';
        turntxt.style.textShadow = '1px 1px 5px #000, -1px -1px 5px #000';
    }

    currColumns[c]--;

    let winnerFound = checkWinner();
    if (!winnerFound && drawflag === 42) {
        isDraw();
    }
}

function checkWinner() {
    // Horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== ' ' &&
                board[r][c] === board[r][c+1] &&
                board[r][c] === board[r][c+2] &&
                board[r][c] === board[r][c+3]) {
                setWinner(r, c);
                return true;
            }
        }
    }

    // Vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] !== ' ' &&
                board[r][c] === board[r+1][c] &&
                board[r][c] === board[r+2][c] &&
                board[r][c] === board[r+3][c]) {
                setWinner(r, c);
                return true;
            }
        }
    }

    // Diagonal (bottom left to top right)
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== ' ' &&
                board[r][c] === board[r-1][c+1] &&
                board[r][c] === board[r-2][c+2] &&
                board[r][c] === board[r-3][c+3]) {
                setWinner(r, c);
                return true;
            }
        }
    }

    // Diagonal (top left to bottom right)
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== ' ' &&
                board[r][c] === board[r+1][c+1] &&
                board[r][c] === board[r+2][c+2] &&
                board[r][c] === board[r+3][c+3]) {
                setWinner(r, c);
                return true;
            }
        }
    }

    return false;
}

function setWinner(r, c) {
    let container = document.getElementById("winnerBoard");
    let containerTxt = document.getElementById("txt");

    if (board[r][c] === playerRed) {
        container.style.opacity = '1';
        containerTxt.innerHTML = 'Red Wins!';
        containerTxt.style.color = 'red';
        setInterval(function () { containerTxt.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }
    else if (board[r][c] === playerYellow) {
        container.style.opacity = '1';
        containerTxt.innerHTML = 'Yellow Wins!';
        containerTxt.style.color = 'yellow';
        setInterval(function () { containerTxt.innerHTML += '.' }, 1000);
        setTimeout(function () { location.reload() }, 4000);
    }

    container.classList.add('win-effect');
    let winSound = new Audio('./sounds/piglevelwin2mp3-14800.mp3');
    winSound.play();
    gameOver = true;
}

function isDraw() {
    let container = document.getElementById("winnerBoard");
    let containerTxt = document.getElementById("txt");

    container.style.opacity = '1';
    containerTxt.innerHTML = 'Draw!';
    containerTxt.style.color = 'black';
    container.classList.add('win-effect');

    let drawSound = new Audio('./sounds/mixkit-unlock-game-notification-253.wav'); 
    drawSound.play();

    gameOver = true;

    setInterval(function () { containerTxt.innerHTML += '.' }, 1000);
    setTimeout(function () { location.reload() }, 4000);
}
