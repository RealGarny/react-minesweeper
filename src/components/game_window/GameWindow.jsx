import React from "react";

import Score from "../UI/score/Score.jsx";
import Timer from "../UI/timer/Timer.jsx";
import Table from "../UI/table/Table.jsx";

function GameWindow()
{
    return(
        <div className="game_window-wrapper">
            <Score/>
            <Timer/>
            <Table/>
        </div>
    )
}

export default GameWindow;