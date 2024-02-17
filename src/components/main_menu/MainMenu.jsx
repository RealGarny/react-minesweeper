import "./MainMenu.css";
import Button from "../UI/buttons/Button";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { setGameState } from "../../store/gameSlice";

const MainMenu = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="m_menu">
            <header>Blocky</header>
            <div className="m_menu-buttons">
                <Button action={()=>dispatch(setGameState("SETTINGS"))}>Play</Button>
                <Button action={()=>{navigate("/leaderboard")}}>Leaderboard</Button>
            </div>
        </div>
    )
}

function test()
{
    console.log("test")
}

export default MainMenu;