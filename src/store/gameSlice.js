import {createSlice} from "@reduxjs/toolkit";

const gameStateSlice = createSlice({
    name: 'Game',
    initialState:{
        mState: "MAIN_MENU",

        gCols: 8,
        gRows: 8,

        gMines: 4,

        gScore: 0,

        gRemainingTime: undefined,

    },
    reducers: {
        setMenuState(state, action)
        {
            state.mState = action.payload;
        },
        setSettings(state, action)
        {
            state.gCols = action.payload.gCols;
            state.gRows = action.payload.gRows;
            state.gMines = action.payload.gMines;
        },
        setScore(state, action)
        {
            state.gScore = action.payload;
        },
    }

})

export const {setMenuState, setGrid, setSettings, setScore, updateTimer} = gameStateSlice.actions;

export default gameStateSlice.reducer;