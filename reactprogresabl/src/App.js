import { useEffect } from 'react';
import './App.css';
import Singform from './components/Singform';
import log from './utilities/mock'
function App() {
  useEffect(()=>{
      log();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Singform/>
      </header>
    </div>
  );
}

export default App;
