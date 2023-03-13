import { useEffect } from 'react';
import './App.css';
import Singform from './components/Singform';
import login from './utilities/mock'
function App() {
  useEffect(() => {
    login(1, "znotario@creditoargentino.com.ar", "Cl88867")
      .then(res =>
        console.log(res)
      )
      .catch(e => console.log('reject', e))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Singform />
      </header>
    </div>
  );
}

export default App;
