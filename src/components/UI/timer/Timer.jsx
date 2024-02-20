import React from "react";
import { useEffect } from "react";
import "./Timer.css";

let startTime;

function Timer(props)
{
    if(props.isRunning && !startTime)
    {
        startTime = Date.now();
    }
    console.log(startTime)
    if(props.isRunning)
    {
        setTimeout(() => {
            props.setGTime(Date.now() - startTime)
        }, 1000);
    }
    return(
        <div>
            Time: {props.time}
        </div>
    )
}

export default Timer;