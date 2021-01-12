import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>You have been in this website for</h2>
        <Timer start={Date.now()}/>
      </header>
    </div>
  );
}

export default App;
