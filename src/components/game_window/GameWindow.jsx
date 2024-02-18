import React from "react";
import "./GameWindow.css"
import { useState } from "react";
import { useSelector } from "react-redux";

import Score from "../UI/score/Score.jsx";
import Timer from "../UI/timer/Timer.jsx";
import Table from "../UI/table/Table.jsx";

function GameWindow()
{
  const [Grid, setGrid] = useState([]);

  const gCols = useSelector(state=> state.game.gCols);
  const gRows = useSelector(state=> state.game.gRows);
  const gMines = useSelector(state=> state.game.gMines);

    function sCreateGrid()
    {
      let tempCells = [];
      //generating grid
      for(let rows = 0; rows < gRows; rows++)
      {
        tempCells.push([]);//create an array for every row
        for(let cols = 0; cols < gCols; cols++)
        {
          tempCells[rows].push({x: rows, y: cols, hasBomb: false, value: 0, isRevealed:false});//create an object for every cell in the column
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
          //generate numbers
          //linear
          if(randomRow-1 >= 0) {tempCells[randomRow-1][randomCol].value += 1;}
          if(randomRow + 1 < tempCells[randomRow].length) {tempCells[randomRow+1][randomCol].value += 1;}
          if(randomCol-1 >= 0) {tempCells[randomRow][randomCol-1].value += 1;}
          if(randomCol + 1 < tempCells[randomRow].length) {tempCells[randomRow][randomCol+1].value += 1;}
          //diagonal
          //top left
          if(randomRow-1 >=0 && randomCol-1 >=0){tempCells[randomRow-1][randomCol-1].value+=1}
          //top right
          if(randomRow+1 < tempCells[randomRow].length && randomCol-1 >= 0){tempCells[randomRow+1][randomCol-1].value+=1}
          //bottom right
          if(randomRow+1 < tempCells[randomRow].length && randomCol+1 < tempCells[randomRow+1].length){tempCells[randomRow+1][randomCol+1].value+=1}
          //bottom left
          if(randomRow-1 >=0 && randomCol+1 < tempCells[randomRow-1].length){tempCells[randomRow-1][randomCol+1].value+=1}
        }
      }
      setGrid(tempCells)
    }

    return(
        <div className="game_window-wrapper">
            <div onClick={()=>{sCreateGrid()}}>
              <Score/>
              <Timer/>
              <Table gGrid={Grid}/>
            </div>
        </div>
    )
}

export default GameWindow;