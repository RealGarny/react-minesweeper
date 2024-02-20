import React from "react";
import "./GameWindow.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMenuState } from "../../store/gameSlice.js";
import { sCreateGrid } from "../../../utils/game.js";

import Score from "../UI/score/Score.jsx";
import Timer from "../UI/timer/Timer.jsx";
import Table from "../UI/table/Table.jsx";
import Button from "../UI/buttons/Button.jsx";

function GameWindow()
{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Grid, setGrid] = useState([]);

  const [isRunning, setIsRunning] = useState(false);
  const [gTime, setGTime] = useState(0);
  const gCols = useSelector(state=> state.game.gCols);
  const gRows = useSelector(state=> state.game.gRows);
  const gMines = useSelector(state=> state.game.gMines);
  const [gScore, setGScore] = useState(gMines);
  const [openCells, setOpenCells] = useState(0);

  const [noMines,setNoMines] = useState(gCols * gRows - gMines);

  useState(()=>{
    setGrid(sCreateGrid(gCols,gRows,gMines))
  },[])

  function startGame()
  {
    setIsRunning(true);
  }

  function endGame()
  {
    setIsRunning(false);
  }

  function restartGame()
  {
    setOpenCells(0);
    setNoMines(gCols * gRows - gMines);
    setIsRunning(false);
    setGScore(gMines);
    setGrid(sCreateGrid(gCols,gRows,gMines));
  }

    return(
        <div className="window-wrapper">
            <div className="game_window-nav">
              <Button action={()=>dispatch(setMenuState("SETTINGS"))} className="game_window-nav_button">settings</Button>
              <Button action={()=>{navigate("/leaderboard")}} className="game_window-nav_button">leaderboard</Button>
            </div>
            <div className="game_window-wrapper">
              <div className="game_window-stats">
                <Score
                  score={gScore}
                />
                <Timer
                  isRunning={isRunning}
                  openCells={openCells}
                  gTime={gTime}
                  setGTime={setGTime}
                />
              </div>
              <Table
                gGrid={Grid}
                isRunning={isRunning}
                openCells={openCells}
                setOpenCells={setOpenCells}
                setGrid={setGrid}
                noMines={noMines}
                setNoMines={()=>{setNoMines((p)=>p= p - 1)}}
                gMines={gMines}
                gTime={gTime}
                setGScore={setGScore}
                endGame={endGame}
                restartGame={restartGame}
                startGame={startGame}
              />
            </div>
        </div>
    )
}

export default GameWindow;