document.addEventListener("DOMContentLoaded", () => {
});

const resetButton = document.getElementById("reset");
const squareArr = document.getElementsByTagName("td");
let clicked = false;
let squareNumber;
let player = 1;
const playerTurnText = document.getElementsByClassName("playerTurn");
let playerOneTurn = 0;
let playerTwoTurn = 0;
let playerOneTurnArr = [];
let playerTwoTurnArr = [];

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//==================MAKING THE GRID CLICKABLE==========================
for (let i = 0; i < squareArr.length; i++) {
  squareArr[i].getAttribute("data-num");
  squareArr[i].setAttribute("class", "clear");
  squareArr[i].addEventListener("click", () => {
    clicked = true;
    checkClicked(i);
    console.log("x array" + playerOneTurnArr);
    //clicked(i);
  });
}
//==================CHECK CLICK==========================
const checkClicked = (i) => {
  if (clicked === true) {
    if (squareArr[i].className === "clear" && player === 1) {
      playerOneTurn += 1;
      checkPlayerOneTurn(i);
      player = 2;

    }
    else if (squareArr[i].className === "clear" && player === 2) {
      addPlayerTwo(i);
      player = 1;

    }
    else {
      alert("Choose another box");
    }
  }
}
//==================PLAYER TURNS=============================
const checkPlayerOneTurn = (i) => {
  if (playerOneTurn >= 3) {
    for (let j = 0; j < playerOneTurnArr.length; j++) {
      for (let k = 0; k < winCondition.length; k++) {
        // if (playerOneTurnArr[j].value === winCondition[k].value) {
        //   alert("PlayerOne Wins");
        // }

        console.log(winCondition[k].value);
      }
    }
  } else {
    addPlayerOne(i);
  }
}
//=================STORING PLAYER'S CLICKS===============================
const addPlayerOne = (i) => {
  squareArr[i].setAttribute("class", "X");
  squareArr[i].innerHTML = "X";
  playerOneTurnArr.push(i);
}

const addPlayerTwo = (i) => {
  squareArr[i].setAttribute("class", "O");
  squareArr[i].innerHTML = "O";
  playerTwoTurnArr.push(i);
}
//==================RESET================================================
resetButton.addEventListener("click", () => {
  clearSquare();
});

const clearSquare = () => {
  for (let i = 0; i < squareArr.length; i++) {
    squareArr[i].removeAttribute("class");
    squareArr[i].innerHTML = "";
    squareArr[i].setAttribute("class", "clear");
  }
}
