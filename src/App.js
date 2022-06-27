import './App.css';
import Home from './pages/Home';
import Player from './pages/Player.js';
import FilmLibrary from './pages/FilmLibrary';
import CringeWall from './pages/CringeWall';
import Boozling from './pages/Boozling';
import Quotes from './pages/Quotes';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="D-bot" element={<Player />} />
        <Route path="Film-Library" element={<FilmLibrary />} />
        <Route path="Cringe-Wall" element={<CringeWall />} />
        <Route path="Boozling" element={<Boozling />} />
        <Route path="Quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;