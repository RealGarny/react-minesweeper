import "./MainMenu.css";
import Button from "../UI/buttons/Button";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { setMenuState } from "../../store/gameSlice";
import { $leaderboard } from "../../../utils/httpPaths";
import leaderboardIcon from "@/leaderboard_icon.svg"

const MainMenu = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="m_menu">
            <header>Blocky</header>
            <div className="m_menu-buttons">
                <Button action={()=>dispatch(setMenuState("SETTINGS"))}>Play</Button>
                <Button action={()=>{navigate($leaderboard)}} >
                        <img alt="" className="leaderboard_icon" src={leaderboardIcon}/>
                    Leaderboard
                </Button>
            </div>
        </div>
    )
}

function test()
{
    console.log("test")
}

export default MainMenu;