let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let scores = [0, 0];
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const squares = document.querySelectorAll(".square");
const refreshButton = document.getElementById("refresh");

document.addEventListener('DOMContentLoaded', () => {
  updateScore();

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
})

function updateScore() {
  let player1 = document.getElementById("scoreP1");
  let player2 = document.getElementById("scoreP2");

  player1.innerHTML = `
    <span id="scoreP1">
      ${scores[0].toString()}
    </span>
  `;

  player2.innerHTML = `
    <span id="scoreP2">
      ${scores[1].toString()}
    </span>
  `;
}

function handleMove (position) {
  if (gameOver) return;

  if (board[position] == '') {
    board[position] = symbols[playerTime];

    gameOver = isWin();
    
    if (gameOver == false) playerTime = (playerTime == 0) ? 1 : 0;
  }

    return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos1 = seq[0];
    let pos2 = seq[1];
    let pos3 = seq[2];

    if(board[pos1] == board[pos2] && 
      board[pos1] == board[pos3] &&
      board[pos1] != '') {
        scores[playerTime] += 1;

        return true;
      }
  }

  return false;
}

let refresh = () => {
  squares.forEach((square) => {
    square.innerHTML = `<div></div>`;
    square.removeChild(square.firstChild);
  });

  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  gameOver = false;
};




















function handleClick (event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    updateScore();

    setTimeout(() => {
      alert (
        "O Jogo acabou. O Vencedor foi o Jogador " +
        playerTime +
        (playerTime == 1 ? "👽": "👨‍🚀")
      );

      refreshButton.className = "display";
    }, 10);
  };

  updateSquares();   
}

function updateSquares () {
  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") square.innerHTML = `<div class='${symbol}'></div>`;
  });
}
