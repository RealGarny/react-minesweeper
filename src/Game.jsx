import './Game.css';
import MainMenu from './components/main_menu/MainMenu.jsx';
import GameWindow from './components/game_window/GameWindow.jsx';
import Settings from './components/settings/Settings.jsx';
import { createLocalStorage } from '../utils/localstorage.js';

import { Routes, Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import Leaderboard from './components/leaderboard/Leaderboard.jsx';
import { useEffect } from 'react';

function Game() {
  const gState = useSelector(state=> state.game.mState);

  useEffect(()=>{
    if(!localStorage.getItem("leaderboard"))
    {
      createLocalStorage();
    }
  },[])

  return (
    <Routes>
      <Route path="/" element={
        <>
          {gState === "MAIN_MENU" && <MainMenu/>}
          {gState === "SETTINGS" && <Settings/>}
          {gState === "GAME" && <GameWindow/>}
        </>
      } />
      <Route path="/leaderboard" element={<Leaderboard/>}/>
    </Routes>
  )
}
export default Game;
