import './App.css';
import Player from './pages/Player/PlayerPage.js';
import Films from './pages/Films/Films.js';
import CringeWall from './pages/CringeWall.js';
import Boozling from './pages/Boozling.js';
import Quotes from './pages/Quotes.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Player />} />
          <Route path='bot' element={<Player />} />
          <Route path="cringe-wall" element={<CringeWall />} />
          <Route path="boozling" element={<Boozling />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="films" element={<Films />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*

*/

export default App;