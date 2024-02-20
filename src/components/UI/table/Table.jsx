import React from "react";
import "./Table.css";
import Cell from "../cell/Cell.jsx";
import { openNearbyCells } from "../../../../utils/game.js";

const flagCount = 0;

function Table(props)
{
  function checkWin()
  {
    if(props.noMines === 0)
    {
      gState("GAME_WON")
    }
  }
  checkWin()
  function gOpenCell(cell)
    {
      let tempTable = JSON.parse(JSON.stringify(props.gGrid));
      let currCell = tempTable[cell.x][cell.y];

      if(currCell.flag === 0 && !currCell.isRevealed)
      {
        currCell.isRevealed = true;
        props.setNoMines();     

        if(!currCell.hasBomb && currCell.value === 0)
        {
          //openNearbyCells(currCell, gOpenCell, tempTable);
          //gOpenCell(tempTable[currCell.x+1][currCell.y+1])
        }
        if(currCell.hasBomb)
        {
          gState("GAME_LOST");
        }

      }
      props.setGrid(tempTable);
    }

  function gRightClick(e, gRow, gCol)
  {
    e.preventDefault();

    let tempTable = JSON.parse(JSON.stringify(props.gGrid));
    let currCell = tempTable[gRow][gCol];
    //changing the flag id
    if(currCell.flag != 2)
    {
      currCell.flag += 1;
      if(currCell.flag == 1)
      {
        props.setGScore(p=> p = p - 1)
      }else if(currCell.flag == 2){
        props.setGScore(p=> p = p + 1)
      }
    }
    else
    {
      currCell.flag = 0;
    }
    //props.setGScore(props.gMines - flagsNum);
    props.setGrid(tempTable);
  }

  function gState(n)
  {
    switch(n)
    {
      case "GAME_LOST":
        console.log("game over.");
        break;
      case "GAME_WON":
        console.log("you win.");
        break;
      case "GAME_RESTART":
        console.log("restarting");
        break;
      case "GAME_START":
        console.log("starting");
        break;
    }
  }

    return(
        <div className='gameGrid'>
        {props.gGrid.map((x, xi)=>
        {
          return(
            <div key={xi}>
              {
               x.map((y, yi)=>{
                return(
                <Cell 
                  key={yi}
                  leftClick={gOpenCell}
                  rightClick={gRightClick}
                  table={props.gGrid}
                  data={{...y}}
                >{y.hasBomb ? "x" : y.value}</Cell>)
               })
              }
            </div>
          )
        })}
      </div>
    )
}

export default Table;