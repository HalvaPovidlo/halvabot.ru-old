import './App.css';
import Player from './pages/Player.js';
import FilmLibrary from './pages/FilmLibrary.js';
import CringeWall from './pages/CringeWall.js';
import Boozling from './pages/Boozling.js';
import Quotes from './pages/Quotes.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Player />} />
          <Route path="films" element={<FilmLibrary />} />
          <Route path="cringe-wall" element={<CringeWall />} />
          <Route path="boozling" element={<Boozling />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;