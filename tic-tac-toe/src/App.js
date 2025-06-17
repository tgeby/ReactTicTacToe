import logo from './logo.svg';
import './App.css';

function Square({ value }) {
  function handleClick() {
    console.log("clicked!");
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
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
    </div>
    <div className="board-row">
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
    </div>
    <div className="board-row">
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
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
