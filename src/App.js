import './App.css';
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
        <Route path="bot" element={<Player />} />
        <Route path="films" element={<FilmLibrary />} />
        <Route path="cringe-wall" element={<CringeWall />} />
        <Route path="boozling" element={<Boozling />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;