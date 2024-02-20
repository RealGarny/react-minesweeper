import React from "react";
import "./GameWindow.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGameState } from "../../store/gameSlice.js";
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

  const gCols = useSelector(state=> state.game.gCols);
  const gRows = useSelector(state=> state.game.gRows);
  const gMines = useSelector(state=> state.game.gMines);
  const [gScore, setGScore] = useState(gMines);

  const [noMines,setNoMines] = useState(gCols * gRows - gMines);

  useState(()=>{
    setGrid(sCreateGrid(gCols,gRows,gMines))
    console.log(gMines)
  },[])

    return(
        <div className="window-wrapper">
            <div className="game_window-nav">
              <Button action={()=>dispatch(setGameState("SETTINGS"))} className="game_window-nav_button">settings</Button>
              <Button action={()=>{navigate("/leaderboard")}} className="game_window-nav_button">leaderboard</Button>
            </div>
            <div className="game_window-wrapper">
              <Score score={gScore}/>
              <Timer/>
              <Table
                gGrid={Grid}
                setGrid={setGrid}
                noMines={noMines}
                setNoMines={()=>{setNoMines((p)=>p-=1)}}
                gMines={gMines}
                setGScore={setGScore}
              />
            </div>
        </div>
    )
}

export default GameWindow;