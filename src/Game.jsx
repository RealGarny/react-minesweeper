import './Game.css';
import { useState } from 'react';
import MainMenu from './components/main_menu/MainMenu.jsx';
import GameWindow from './components/game_window/GameWindow.jsx';

function Game() {

  const [gState, setGState] = useState("MAIN_MENU");

  const gItems = 8;

  let gStartTime = undefined;
  const [gCurrentTime, setGCurrentTime] = useState();

  let gScore = 0;

  let gCells = [];
  let gCellsMap = [];

  function createGridData()
  {
    for(let rows = 0; rows < gItems; rows++)
    {
      gCells.push([]);//create an array for every row
      for(let cols = 0; cols < gItems; cols++)
      {
        gCells[rows].push({x: rows+1, y: cols+1, hasBomb: false, value: 0});//create an object for every cell in the column
      }
    }
  }

  function sStartGame()
  {
    setGState("GAME_CYCLE");
    gStartTime = new Date();
    setGCurrentTime(gStartTime);
    console.log("preemptive")
  }

  return (
    <>
      {gState === "MAIN_MENU" && <MainMenu gStartGame={sStartGame}/>}
      {gState === "GAME_CYCLE" && <GameWindow/>}
    </>
  )
}
export default Game;
