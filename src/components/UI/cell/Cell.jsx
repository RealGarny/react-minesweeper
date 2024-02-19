import React from "react";
import "./Cell.css";

const Cell = (props) =>
{
    const cellData = props.data;
    const symbols = [0,"f","?"]
    return(
        <div
            className="cell"
            onClick={(e)=>{props.leftClick(cellData)}}
            onContextMenu={(e)=>{props.rightClick(e, cellData.x, cellData.y)}}
        >
            {cellData.isRevealed ? props.children : ""}
            {!cellData.isRevealed && cellData.flag === 1 ? symbols[1]: ""/*need to be remade later*/}
            {!cellData.isRevealed && cellData.flag === 2 ? symbols[2]: ""}
        </div>
    )
}

export default Cell;