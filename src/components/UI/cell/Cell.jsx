import React from "react";
import "./Cell.css";

const Cell = (props) =>
{

    return(
        <div className="cell" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Cell;