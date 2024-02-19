import React from "react";
import "./GameWindow.css"
import { useState } from "react";
import { useSelector } from "react-redux";
import { sCreateGrid } from "../../../utils/game.js";

import Score from "../UI/score/Score.jsx";
import Timer from "../UI/timer/Timer.jsx";
import Table from "../UI/table/Table.jsx";

function GameWindow()
{
  const [Grid, setGrid] = useState([]);

  const gCols = useSelector(state=> state.game.gCols);
  const gRows = useSelector(state=> state.game.gRows);
  const gMines = useSelector(state=> state.game.gMines);

  useState(()=>{
    setGrid(sCreateGrid(gCols,gRows,gMines))
  },[])

    return(
        <div className="game_window-wrapper">
            <div>
              <Score/>
              <Timer/>
              <Table gGrid={Grid} setGrid={setGrid}/>
            </div>
        </div>
    )
}

export default GameWindow;