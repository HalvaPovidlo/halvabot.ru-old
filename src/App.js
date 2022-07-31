import './App.css';
import Player from './pages/Player/PlayerPage.js';
import Films from './pages/Films/Films.js';
import CringeWall from './pages/CringeWall.js';
import Boozling from './pages/Boozling.js';
import Quotes from './pages/Quotes.js';
import Login from './pages/Login/Login';
import useToken from './useToken';
import { UserContext } from './Context';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className='App'>
      <UserContext.Provider value={token}>
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
      </UserContext.Provider>
    </div>
  );
}

export default App;