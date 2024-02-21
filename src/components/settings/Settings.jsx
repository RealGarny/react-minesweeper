import React from "react";
import "./Settings.css";
import {useDispatch} from "react-redux";
import { setMenuState, setSettings } from "../../store/gameSlice";
import { useState } from "react";
import Button from "../UI/buttons/Button";

function Settings() {
    const dispatch = useDispatch();
    const [dificulty, setDificulty] = useState("normal");

    const openGameWindow = () =>
    {
        dispatch(setMenuState("GAME"));
        dispatchSettings();
    }

    const dispatchSettings = () =>
    {
        switch(dificulty){
            case "easy":
                dispatch(setSettings({gCols: 8, gRows: 8, gMines: 10, gDifficulty: "easy"}));
                break;
            case "normal":
                dispatch(setSettings({gCols: 16, gRows: 16, gMines: 40, gDifficulty: "normal"}));
                break;
            case "hard":
                dispatch(setSettings({gCols: 32, gRows: 16, gMines: 100, gDifficulty: "hard"}));
                break;
        }
    }

    return(
        <div className="settings">
            <div className="settings-wrapper">
                <h1 className="settings-header">Settings</h1>
                <div>
                    <Button className={`btn-switch ${dificulty === "easy" ? "btn-selected" : ""}`} action={()=>{setDificulty("easy")}}>Easy</Button>
                    <Button className={`btn-switch ${dificulty === "normal" ? "btn-selected" : ""}`} action={()=>{setDificulty("normal")}}>Normal</Button>
                    <Button className={`btn-switch ${dificulty === "hard" ? "btn-selected" : ""}`} action={()=>{setDificulty("hard")}}>Hard</Button>
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