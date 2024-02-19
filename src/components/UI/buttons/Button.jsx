import React from "react";
import "./button.css";

function Button(props)
{
    return(
        <div className={props.className ? props.className : "button"} onClick = {props.action}>
            {props.children}
        </div>
    )
}

export default Button;