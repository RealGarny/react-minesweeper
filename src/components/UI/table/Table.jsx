import React from "react";
import "./Table.css";
import Cell from "../cell/Cell.jsx";

function Table(props)
{

  function gOpenCell()
    {

    }

  function gRightClick(e)
  {
    e.preventDefault();
    console.log("rightClick")
  }

  function gStopGame()
  {
    
  }

    return(
        <div className='gameGrid'>
        {props.gGrid.map((x, xi)=>
        {
          return(
            <div key={xi}>
              {
               x.map((y, yi)=>{
                return(
                <Cell 
                  key={yi} 
                  rightClick={gRightClick}
                  data={{...y}}
                >{y.hasBomb ? "x" : y.value}</Cell>)
               })
              }
            </div>
          )
        })}
      </div>
    )
}

export default Table;