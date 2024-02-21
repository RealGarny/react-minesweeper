import {configureStore} from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import leaderboardSlice from "./leaderboardSlice";

export default configureStore({
    reducer: {
        game: gameSlice,
        leaderboard: leaderboardSlice,
    }
})