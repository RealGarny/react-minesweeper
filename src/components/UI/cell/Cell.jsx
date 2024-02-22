import React from "react";
import "./Cell.css";

const Cell = (props) =>
{
    const cellData = props.data;
    const symbols = [0,"f","?"];
    const colors = ["rgba(0,0,0,0%)","#408ff7","#5ac11f","#EB0505","#0c23ce","#331c02","#53f4dc","#0c0a09", "#fff"]
    const backgrColors = ["#e0e0e0","rgba(0,0,0,0%)","rgba(0,0,0,0%)","rgba(0,0,0,0%)","rgba(0,0,0,0%)","rgba(0,0,0,0%)","rgba(0,0,0,0%)","#fff", "#0c0a09"]
    const style = {
        color: colors[cellData.value],
        backgroundColor: backgrColors[cellData.value],
    }
    return(
        <div
            className="cell"
            style={cellData.isRevealed && !cellData.hasBomb ? style : {}}
            onClick={(e)=>{props.leftClick(e, cellData)}}
            onContextMenu={(e)=>{props.rightClick(e, cellData.x, cellData.y)}}
        >
            {cellData.isRevealed ? props.children : ""}
            {!cellData.isRevealed && cellData.flag === 1 ? symbols[1]: ""/*need to be remade later*/}
            {!cellData.isRevealed && cellData.flag === 2 ? symbols[2]: ""}
        </div>
    )
}

export default Cell;