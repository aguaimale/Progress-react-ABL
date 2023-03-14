import './App.css';
import Singform from './components/Singform';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Singform />} />
          <Route path="/Home" element={<>
            <Navbar />
            <Home />
          </>

          } />
        </Routes>


      </header>
    </div>
  );
}

export default App;



