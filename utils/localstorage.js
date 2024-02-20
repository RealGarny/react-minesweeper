export function createLocalStorage()
{
    localStorage.setItem("leaderboard", JSON.stringify({
        hard: {
            players:[]
        },
        normal: {
            players:[]
        },
        easy: {
            players:[]
        },
    }));
}
//needs to be implemented
export function addToLocalStorage(player, difficulty, time)
{
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard"))

    switch(difficulty)
    {
        case"hard":
            if(leaderboard.hard.players.length < 10)
            {
                localStorage.setItem("leaderboard", {...leaderboard, hard:{}})
            }
            if(leaderboard.hard.players[leaderboard.hard.players.length-1].time> time)
            {

            }
    }
}