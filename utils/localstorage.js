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

export function addToLocalStorage(player, difficulty, time)
{
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
    const difficulties = Object.keys(leaderboard)
    let found = false;

    for(let i = 0; i <= difficulties.length-1; i++)
    {
        console.log(difficulties[i], difficulty)
        if(difficulty === difficulties[i])
        {
            found = true;
            let tempPlayers = leaderboard[difficulty].players;

            if(tempPlayers.length < 10)
            {
                tempPlayers.push({nickname: player, time: time})
            } else {
                tempPlayers[tempPlayers.length-1] = {nickname: player, time: time}
            }

            tempPlayers.sort(function (a, b) {return a.time - b.time});

            localStorage.setItem("leaderboard", JSON.stringify({
                ...leaderboard,
                [difficulty]:{
                    players: tempPlayers
                }
            }))
        }
    }
    return found;
}