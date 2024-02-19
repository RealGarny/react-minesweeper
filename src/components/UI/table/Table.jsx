import React from "react";
import "./Table.css";
import Cell from "../cell/Cell.jsx";
import { openNearbyCells } from "../../../../utils/game.js";

function Table(props)
{

  function gOpenCell(cell)
    {
      let tempTable = JSON.parse(JSON.stringify(props.gGrid));
      let currCell = tempTable[cell.x][cell.y];
      
      if(currCell.flag === 0 && !currCell.isRevealed)
      {
        currCell.isRevealed = true;
        

        if(!currCell.hasBomb && currCell.value === 0)
        {
          //openNearbyCells(currCell, gOpenCell, tempTable);
          gOpenCell(tempTable[currCell.x+1][currCell.y+1])
          console.log(tempTable[currCell.x+1][currCell.y+1])
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
    }
    else
    {
      currCell.flag = 0;
    }
    props.setGrid(tempTable);
  }

  function gStopGame()
  {
    
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