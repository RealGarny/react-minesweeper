import React from "react";
import "./leaderboard.css";
import { setLeadreboard } from "../../store/leaderboardSlice";
import { useSelector, useDispatch } from "react-redux";
import { createLocalStorage } from "../../../utils/localstorage";
import { useEffect, useState } from "react";
import Button from "../UI/buttons/Button";
import { useNavigate } from "react-router-dom";
import { $baseURL } from "../../../utils/httpPaths";

export default function Leaderboard()
{
    const dispatch = useDispatch();

    if(Object.keys(useSelector(state=>state.leaderboard.leaderboard)).length === 0)
    {
        if(!localStorage.getItem("leaderboard"))
        {
            createLocalStorage();
        }
        dispatch(setLeadreboard(JSON.parse(localStorage.getItem("leaderboard"))));
    }
    const leaderboard = useSelector(state=>state.leaderboard.leaderboard);
    const [displayLeaderboard, setDisplayLeaderboard] = useState("easy");
    const navigate = useNavigate();

    return(
        <div className="leaderboard">
            <div className="leaderboard-wrapper">
                <div className="h1 settings-header">
                    Leaderboard
                </div>
                <div className="leaderboard_flex">
                    <Button 
                        className={`game_window-nav_button ta-c d ${displayLeaderboard==="easy" && "active"}`}
                        action={()=>{setDisplayLeaderboard("easy")}}
                    >easy</Button>
                    <Button 
                        className={`game_window-nav_button ta-c d ${displayLeaderboard==="normal" && "active"}`}
                        action={()=>{setDisplayLeaderboard("normal")}}
                    >normal</Button>
                    <Button
                        className={`game_window-nav_button ta-c d ${displayLeaderboard==="hard" && "active"}`}
                        action={()=>{setDisplayLeaderboard("hard")}}
                    >hard</Button>
                </div>
                <div className="leaderboard_content">
                    {leaderboard[displayLeaderboard].players.map(e =>{
                        return(
                        <div className="leaderboard_flex">
                            <p>nickname: {e.nickname}</p>
                            <p>time: {e.time}s.</p>
                        </div>
                        )
                    })}
                </div>
                <Button action={()=>{navigate($baseURL)}}>back</Button>
            </div>
        </div>
    )
}