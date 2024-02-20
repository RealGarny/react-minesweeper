import React from "react";
import "./Modal.css";

export default function Modal(props)
{
    return(
        <div className="modal">
            <div className="modal--content">
                {props.children}
            </div>
        </div>
    )
}