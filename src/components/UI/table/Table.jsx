import React from "react";
import "./Table.css";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";

import { setMenuState } from "../../../store/gameSlice.js";
import { addToLocalStorage } from "../../../../utils/localstorage.js";
import Cell from "../cell/Cell.jsx";
import Modal from "../modal/Modal.jsx";
import Button from "../buttons/Button.jsx";
import { openNearbyCells } from "../../../../utils/game.js";

function Table(props)
{
  const dispatch = useDispatch();
  const [revealModal,setRevealModal] = useState(false);
  const [username,setUsername] = useState("");
  const [gameStatus, setGameStatus] = useState();
  const gDifficulty = useSelector(state => state.game.gDifficulty)

  function gOpenCell(cell, tempTable)
    {
      if(props.noMines === 1)
      {
        gState("GAME_WON")
      }
      let currCell = tempTable[cell.x][cell.y];

      if( props.openCells === 0 )
      {
        props.startGame();
      }

      if(currCell.flag === 0 && !currCell.isRevealed)
      {
        currCell.isRevealed = true;
        props.setNoMines();    
        props.setOpenCells(p => p+1);

        if(!currCell.hasBomb && currCell.value === 0)
        {
          let adjacent = openNearbyCells(currCell, tempTable);

          adjacent.forEach(element => {
            if(element.flag === 0)
            {
              gOpenCell(element, tempTable);
            }

          });
          //gOpenCell(tempTable[currCell.x+1][currCell.y+1])
        }
        if(currCell.hasBomb)
        {
          gState("GAME_LOST");
        }

      }
      return tempTable
    }

  function gLeftClick(e, cell)
  {
    let tempTable = gOpenCell(cell, JSON.parse(JSON.stringify(props.gGrid)));
    

    props.setGrid(tempTable);
  }

  function gRightClick(e, gRow, gCol)
  {
    e.preventDefault();

    let tempTable = JSON.parse(JSON.stringify(props.gGrid));
    let currCell = tempTable[gRow][gCol];
    //changing the flag id
    if(currCell.flag != 2 && props.isRunning)
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
        props.endGame();
        setRevealModal(true);
        setGameStatus("GAME_OVER");
        break;

      case "GAME_WON":
        props.endGame();
        setRevealModal(true);
        setGameStatus("GAME_WON");
        break;

      case "GAME_RESTART":
        props.restartGame();
        break;

      case "GAME_START":
        props.startGame();
        setGameStatus("GAME_START");
        break;
    }
  }

  function handleInput(e)
  {
    setUsername(e.target.value);
    console.log(username)
  }
  function handleSubmit(e)
  {
    e.preventDefault();
    addToLocalStorage(username, gDifficulty, props.gTime)
    setUsername("");
    setRevealModal(false);
    props.restartGame();
  }

    return(
      <>
        {
        revealModal &&
        <Modal>
          {gameStatus == "GAME_WON"?
          <>
            <div className="h1 modal-header">YOU WIN!</div>
            <div className="modal-subtext">Your time: {props.gTime}s.</div>
            <form onSubmit={handleSubmit}>
              <div className="form-items-wrapper">
                <div className="modal-form_input">
                  {username === "" && <label className="modal-form_input-label">type your nickname</label>}
                  <input type="text" value={username} onChange={handleInput}/>
                </div>
                <button>send</button>
              </div>
            </form>
          </>
          :
           <>
            <div className="h1 modal-header">GAME OVER</div>
            <div className="modal-subtext">better luck next time</div>
            <div className="modal-nav-buttons-wrapper">
              <Button className="game_window-nav_button" action={()=>{setRevealModal(false);gState("GAME_RESTART")}}>Restart</Button>
              <Button className="game_window-nav_button" action={()=>{setRevealModal(false);dispatch(setMenuState("MAIN_MENU"))}}>Menu</Button>
            </div>
          </>
          }
        </Modal>
        }
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
                    leftClick={gLeftClick}
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
      </>
    )
}

export default Table;