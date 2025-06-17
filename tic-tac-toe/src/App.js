import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button 
      className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) { 
      return; 
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
  <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tic-Tac-Toe
        </p>
      </header>
      <main className="Main-content">
        <Board/>
      </main>
    </div>
  );
}

export default App;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], // horizontal top row positions
    [3, 4, 5], // horizontal middle row positions
    [6, 7, 8], // horizontal bottom row positions
    [0, 3, 6], // vertical left column positions
    [1, 4, 7], // vertical middle column positions
    [2, 5, 8], // vertical right column positions
    [0, 4, 8], // negative-sloped diagonal positions
    [2, 4, 6]  // positive-sloped diagonal positions
  ]
  // If the same (non-null) value is present in all positions of one of the above lines, 
  // it is the winner, so return that value
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}