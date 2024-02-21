import {createSlice} from "@reduxjs/toolkit";

const leaderboardSlice = createSlice({
    name: 'Game',
    initialState:{
        leaderboard:{},
    },
    reducers: {
        setLeadreboard(state, action)
        {
            state.leaderboard = action.payload;
        },
    }

})

export const {setLeadreboard} = leaderboardSlice.actions;

export default leaderboardSlice.reducer;