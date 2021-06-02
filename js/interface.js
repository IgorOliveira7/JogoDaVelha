document.addEventListener('DOMContentLoaded', () =>{

    let squares = document.querySelectorAll(".square");
    let player1 = document.getElementById("scoreP1");
    let player2 = document.getElementById("scoreP2");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

let refresh = () => window.location.reload();
let refreshButton = document.getElementById("refresh");

function handleClick (event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
      updateScore()
        setTimeout(() => {
        alert ("O Jogo acabou. O Vencedor foi o Jogador " + playerTime +
        (playerTime == 1 ? "👽": "👨‍🚀"));
        refreshButton.className = "display";
        }, 10);
    };
    updateSquares();
    
    
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
  
    squares.forEach((square) => {
      let position = square.id;
      let symbol = board[position];
  
      if (symbol != "") {
        square.innerHTML = `<div class='${symbol}'></div>`;
      }
    });
  }

  function updateScore(){
    player1.innerHTML = `<span class='firstIcon'>👨‍🚀</span>
    <span id="scoreP1">${scores[0].toString()}</span>`;
    player2.innerHTML = `<span class='secondIcon'>👽</span>
    <span id="scoreP2">${scores[1].toString()}</span>`;

}