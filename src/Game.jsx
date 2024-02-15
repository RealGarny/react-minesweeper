import './Game.css';
import { useState } from 'react';
import MainMenu from './components/main_menu/MainMenu.jsx';
import Cell from './components/UI/cell/Cell.jsx';

function Game() {

  let gState = "MAIN_MENU";

  const gItems = 8;

  let gStartTime = undefined;
  const [gCurrentTime, setGCurrentTime] = useState();

  let gScore = 0;

  let gCells = [];
  let gCellsMap = [];

  function createGridData()
  {
    for(let r = 0; r < gItems; r++)
    {
      gCells.push([]);//create an array for every row
      for(let c = 0; c < gItems; c++);
      {
        gCells[r].push({x: r+1, y: c+1, hasBomb: false, value: 0});//create an object for every cell in the column
      }
    }
  }

  function createGrid()
  {
    
  }
  
  function sStartGame()
  {
    let gState = "GAME_CYCLE";
    gStartTime = new Date();
    setGCurrentTime(gStartTime);
  }

  return (
    <>
      <MainMenu gState={gState}/>
      <div onClick={createGridData}>test</div>
    </>
  )
}
export default Game;
