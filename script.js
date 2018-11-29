document.addEventListener("DOMContentLoaded", () => {
});

const resetButton = document.getElementById("reset");
const squareArr = document.getElementsByTagName("td");
let clicked = false;
let squareNumber;
let player = 1;
const playerTurnText = document.getElementsByClassName("playerTurn");
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


for (let i = 0; i < squareArr.length; i++) {
  squareArr[i].getAttribute("data-num");
  squareArr[i].setAttribute("class", "clear");
  squareArr[i].addEventListener("click", () => {
    clicked = true;
    checkClicked(i);
    //clicked(i);
  });

}

const checkClicked = (i) => {
  if (clicked === true) {
    if (squareArr[i].className === "clear" && player === 1) {
      addPlayerOne(i);
      player = 2;
      playerTurnText.innerHTML = "It is O's turn";
    }
    else if (squareArr[i].className === "clear" && player === 2) {
      addPlayerTwo(i);
      player = 1;
      playerTurnText.innerHTML = "It is X's turn";
    }
    else {
      alert("Choose another box");
    }

  }

}

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
// const addPlayerTwo = () => {
//   for (let i = 0; i < squareArr.length; i++) {
//     squares[dotSequence[i]].classList.add("X");
//   }
// }

const clearSquare = () => {
  for (let i = 0; i < squareArr.length; i++) {
    squareArr[i].removeAttribute("class");
    squareArr[i].innerHTML = "";
    squareArr[i].setAttribute("class", "clear");


    //    squareArr[i].setAttribute("class", "clear");
  }
}

resetButton.addEventListener("click", () => {
  clearSquare();

});