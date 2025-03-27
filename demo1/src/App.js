import logo from './logo.svg';
import './App.css';
import {useState} from 'react';



function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World!!
         <br/>
         {counter}
         {}
        </p>
        <p>
          <button onClick={()=>setCounter(counter+1)}>Click Me..</button>
          </p>
      </header>
    </div>
  );
}

export default App;
