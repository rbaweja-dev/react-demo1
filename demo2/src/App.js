import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [time, setTime] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Demo2 React App..
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {time.toLocaleTimeString()}
        </a>
      </header>
    </div>
  );
}

export default App;
