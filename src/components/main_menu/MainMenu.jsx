import "./MainMenu.css";

const MainMenu = (props) =>
{
    return(
        <div className="m_menu" style={{display: props.gState === "MAIN_MENU"? "block" : "none"}}>
            <header>Blocky</header>
            <div className="m_menu-buttons">
                <button>start</button>
                <button>leaderboard</button>
                <button>settings</button>
            </div>
        </div>
    )
}

function test()
{
    console.log("test")
}

export default MainMenu;