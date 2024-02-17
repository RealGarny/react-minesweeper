import React from "react";
import "./Settings.css";
import {useDispatch} from "react-redux";
import { setGameState } from "../../store/gameSlice";
import Button from "../UI/buttons/Button";

function Settings() {
    const dispatch = useDispatch();

    const startGame = () =>{
        dispatch(setGameState("GAME_CYCLE"))
    }
    return(
        <div className="settings">
            <h1>Settings</h1>
            <div className="settings-buttons">
                <Button action={startGame}>Start</Button>
                <Button action={()=>dispatch(setGameState("MAIN_MENU"))}>Go back</Button>
            </div>
        </div>
    )
}

export default Settings;