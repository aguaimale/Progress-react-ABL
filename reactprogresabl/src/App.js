import './App.css';
import Singform from './components/Singform';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import TabladeUsuarios from './components/TabladeUsuarios';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route exact path="/" element={<Singform/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>


      </header>
    </div>
  );
}

export default App;

      
      
