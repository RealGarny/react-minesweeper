import React from "react";
import "./Button.css";

function Button(props)
{
    return(
        <div className="button" onClick = {props.action}>
            {props.children}
        </div>
    )
}

export default Button;