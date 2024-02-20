import React from "react";
import "./Score.css";

function Score(props)
{
    return(
        <div>
            Score: {props.score}
        </div>
    )
}

export default Score;