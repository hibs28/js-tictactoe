document.addEventListener("DOMContentLoaded", () => {
});

const resetButton = document.getElementById("reset");
const squareArr = document.getElementsByTagName("td");
let clicked = false;
let squareNumber;

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
  squareArr[i].addEventListener("click", () => {
    clicked = true;
    addPlayerOne(i);
    //clicked(i);
  });
  ;
}

//const checkClicked

const addPlayerOne = (i) => {
  squareArr[i].classList.add("X");
  squareArr[i].innerHTML = "X";
}

const addPlayerTwo = (i) => {
  squareArr[i].classList.add("O");
  squareArr[i].innerHTML = "O";
}
// const addPlayerTwo = () => {
//   for (let i = 0; i < squareArr.length; i++) {
//     squares[dotSequence[i]].classList.add("X");
//   }
// }

// const clearSquare = () => {
//   for (let i = 0; i < squareArr.length; i++) {
//     squareArr[i].removeAttribute("class");
//     squareArr[i].setAttribute("class", "clear");
//     ;
//   }
// }

resetButton.addEventListener("click", clearSquare());