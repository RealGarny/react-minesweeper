import React from "react";
import { useState } from "react";
import "./Timer.css";

let startTime;

function Timer(props)
{
    if(props.isRunning && !startTime)
    {
        startTime = Date.now();
    }
    if(props.openCells === 0 && !props.isRunning)
    {
        startTime = 0;
        if(props.gTime!=0)
        {
            props.setGTime(0);
        }
    }
    if(props.isRunning)
    {
        setTimeout(() => {
            props.setGTime(Math.floor((Date.now() - startTime)/1000))
        }, 1000);
    }
    return(
        <div>
            Time: {props.gTime}
        </div>
    )
}

export default Timer;