import './Game.css';
import MainMenu from './components/main_menu/MainMenu.jsx';
import GameWindow from './components/game_window/GameWindow.jsx';
import Settings from './components/settings/Settings.jsx';

import { Routes, Route} from 'react-router-dom';
import { $baseURL, $leaderboard } from '../utils/httpPaths.js';
import {useSelector} from "react-redux";
import Leaderboard from './components/leaderboard/Leaderboard.jsx';

function Game() {
  const gState = useSelector(state=> state.game.mState);

  return (
    <Routes>
      <Route path={$baseURL} element={
        <>
          {gState === "MAIN_MENU" && <MainMenu/>}
          {gState === "SETTINGS" && <Settings/>}
          {gState === "GAME" && <GameWindow/>}
        </>
      } />
      <Route path={$leaderboard} element={<Leaderboard/>}/>
    </Routes>
  )
}
export default Game;
