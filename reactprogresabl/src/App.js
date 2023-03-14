import './App.css';
import Singform from './components/Singform';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';


function App() {
  const state = useSelector((state) => state.loged)
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Singform />} />
          <Route path="/Home" element={
            <>
              {state ?
                <>
                  <Navbar />
                  <Home />
                </>
                : <>
                <Navbar />
                <Home />
              </>}
            </>

          } />
        </Routes>


      </header>
    </div>
  );
}

export default App;



