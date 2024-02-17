import React from "react";
import "./Table.css";
import Cell from "../cell/Cell.jsx";

function Table()
{
    return(
        <div className='gameGrid'>
        {gCells.map((row, rowi)=>
        {
          return(
            <div key={rowi}>
              {
               row.map((col, coli)=>{
                return(<div key={coli}></div>)
               })
              }
            </div>
          )
        })}
      </div>
    )
}

export default Table;