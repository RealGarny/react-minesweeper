import React from "react";
import "./Cell.css";

const Cell = (props) =>
{
    const cellData = props.data;
    return(
        <div className="cell" onClick={()=>{console.log(cellData)}} onContextMenu={(e)=>{props.rightClick(e)}}>
            {cellData.isRevealed ? props.children : ""}
        </div>
    )
}

export default Cell;