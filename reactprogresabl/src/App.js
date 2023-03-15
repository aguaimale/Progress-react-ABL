import './App.css';
import Singform from './components/Singform';
import Home from './components/Home';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Redirect from './components/Redirect';


function App() {
  const state = useSelector((state) => state.loged)
  const navigate = useNavigate();
   const redi = "/";
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
                :<> 
                {<Redirect/>}
                </>
                }
            </>

          } />
        </Routes>


      </header>
    </div>
  );
}

export default App;



