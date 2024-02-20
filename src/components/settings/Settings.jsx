import React from "react";
import "./Settings.css";
import {useDispatch} from "react-redux";
import { setMenuState, setSettings } from "../../store/gameSlice";
import { useState } from "react";
import Button from "../UI/buttons/Button";

function Settings() {
    const dispatch = useDispatch();
    const [dificulty, setDificulty] = useState("Normal");

    const openGameWindow = () =>
    {
        dispatch(setMenuState("GAME"));
        dispatchSettings();
    }

    const dispatchSettings = () =>
    {
        switch(dificulty){
            case "Easy":
                dispatch(setSettings({gCols: 3, gRows: 3, gMines: 1}));
                break;
            case "Normal":
                dispatch(setSettings({gCols: 16, gRows: 16, gMines: 40}));
                break;
            case "Hard":
                dispatch(setSettings({gCols: 32, gRows: 16, gMines: 100}));
                break;
        }
    }

    return(
        <div className="settings">
            <div className="settings-wrapper">
                <h1 className="settings-header">Settings</h1>
                <div>
                    <Button className={`btn-switch ${dificulty === "Easy" ? "btn-selected" : ""}`} action={()=>{setDificulty("Easy")}}>Easy</Button>
                    <Button className={`btn-switch ${dificulty === "Normal" ? "btn-selected" : ""}`} action={()=>{setDificulty("Normal")}}>Normal</Button>
                    <Button className={`btn-switch ${dificulty === "Hard" ? "btn-selected" : ""}`} action={()=>{setDificulty("Hard")}}>Hard</Button>
                </div>
                <div className="settings-buttons">
                    <Button action={openGameWindow}>Start</Button>
                    <Button action={()=>dispatch(setMenuState("MAIN_MENU"))}>Menu</Button>
                </div>
            </div>
        </div>
    )
}

export default Settings;