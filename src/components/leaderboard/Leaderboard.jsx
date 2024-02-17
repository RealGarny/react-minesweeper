import React from "react";
import "./leaderboard.css";
import Button from "../UI/buttons/Button";
import { useNavigate } from "react-router-dom";

export default function Leaderboard()
{
    const navigate = useNavigate();
    return(
        <>
            <div>
                Leaderboard
            </div>
            <Button action={()=>{navigate("/")}}>back</Button>
        </>
    )
}