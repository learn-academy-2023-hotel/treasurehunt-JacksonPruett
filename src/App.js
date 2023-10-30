import React, { useState } from "react";

import Square from "./components/Square";

import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [BombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleSquareClick = (clickedSquareIndex) => {
    // variable holding copy of current state
    let updatedBoard = [...board];
    // set condition for if treasure location is same as the clicked square's index show a treasure
    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎";
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === BombLocation) {
      updatedBoard[clickedSquareIndex] = "💣";
      // setBoard[updatedBoard]
    } else {
      // use index from clickedSquareIndex to update the clicked square's value with emoji using bracket notation
      updatedBoard[clickedSquareIndex] = "👾";
      // update state with the new board
      // setBoard(updatedBoard)
    }
    setBoard(updatedBoard);
  };

  const refreshPage = () => { 
    window.location.reload() 
}

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {/* Map over array and return a square for each element */}
        {board.map((value, index) => {
          console.log(value, index);
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
      <div className="restart">  
      <button onClick={refreshPage}>
            Play again?
      </button>
      </div>
    </>
  );
};

export default App;
