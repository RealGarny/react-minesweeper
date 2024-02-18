import React from "react";
import "./Table.css";
import {useSelector} from "react-redux";
import Cell from "../cell/Cell.jsx";

function Table(props)
{
  const gGrid= useSelector(state => state.game.gGrid);

  function gOpenCell()
    {

    }

  function gTagCell()
  {

  }

  function gStopGame()
  {
    
  }

    return(
        <div className='gameGrid'>
        {gGrid.map((x, xi)=>
        {
          return(
            <div key={xi}>
              {
               x.map((y, yi)=>{
                return(
                <Cell 
                  key={yi} 
                  onClick={()=>{console.log(xi, yi)}}
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