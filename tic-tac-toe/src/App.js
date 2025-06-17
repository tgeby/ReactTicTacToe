import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }
  
  return (
    <button 
      className="square"
      onClick={handleClick}
      >
        {value}
      </button>
  );
}

function Board() {
  return (
  <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
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
