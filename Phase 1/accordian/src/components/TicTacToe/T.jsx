import React, { useState } from "react";
import "./T.css";
const T = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (board[index] || gameOver) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
      return;
    }

    //check if its a draw
    if (newBoard.every((square) => square !== null)) {
      setGameOver(true);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // function to check for winner
  const checkWinner = (board) => {};

  const Square = () => {};

  const getStatusMessage = () => {};

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tictactoe</h1>
      <div className="status-sms">{getStatusMessage()}</div>
      <div className="game-board">
        {board.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
      <button onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default T;
