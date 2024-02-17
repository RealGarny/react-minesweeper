import React from "react";

import Score from "../UI/score/Score.jsx";
import Timer from "../UI/timer/Timer.jsx";
import Table from "../UI/table/Table.jsx";

function GameWindow()
{

    function sCreateGrid()
    {
      let tempCells = [];
      //generating grid
      for(let rows = 0; rows < gRows; rows++)
      {
        tempCells.push([]);//create an array for every row
        for(let cols = 0; cols < gCols; cols++)
        {
          tempCells[rows].push({x: rows+1, y: cols+1, hasBomb: false, value: 0});//create an object for every cell in the column
        }
      }
  
      //generating mines
      for(let i = 0; i < gMines; i++)
      {
        const randomRow = Math.floor(Math.random() * gRows);
        const randomCol = Math.floor(Math.random() * gCols);
  
        const cell = tempCells[randomRow][randomCol];
  
        if(cell.hasBomb)
        {
          i--;
        }else
        {
          cell.hasBomb = true;
        }
      }
  
      return(tempCells);
    }
  
    function sStartGame()
    {
      gStartTime = new Date();
      setGCurrentTime(gStartTime);
      sCreateGrid(setCells);
    }



    return(
        <div className="game_window-wrapper">
            <Score/>
            <Timer/>
            <Table/>
        </div>
    )
}

export default GameWindow;