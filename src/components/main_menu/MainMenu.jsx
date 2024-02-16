import "./MainMenu.css";
import Button from "../UI/buttons/Button";

const MainMenu = (props) =>
{
    return(
        <div className="m_menu">
            <header>Blocky</header>
            <div className="m_menu-buttons">
                <Button action={props.gStartGame}>start</Button>
                <Button>leaderboard</Button>
                <Button>settings</Button>
            </div>
        </div>
    )
}

function test()
{
    console.log("test")
}

export default MainMenu;