import React from "react";
import "./Cell.css";

const Cell = (props) =>
{
    const cellData = props.data;
    const symbols = [0,"f","?"];
    const colors = ["#000","#EB0505","#40CBCB","#CA31D8","#5FB043","#9E7015","#5D3FD4","#C242EF"]
    const style = {
        color: colors[cellData.value]
    }
    return(
        <div
            className="cell"
            style={cellData.isRevealed ? style : {}}
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