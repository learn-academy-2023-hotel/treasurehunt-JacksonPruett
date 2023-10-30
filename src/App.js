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
  ])

  const handleSquareClick = (clickedSquareIndex) => {
    // variable holding copy of current state
    let updatedBoard = [...board]
    // use index to update the clicked square's value with emoji
    updatedBoard[clickedSquareIndex] = "👾"
    // update state with the new board
    setBoard(updatedBoard)
  };

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
          )
          console.log(value, index)
          return <Square value={value}/>
        })}
      </div>
    </>
  );
};

export default App;
