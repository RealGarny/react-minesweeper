import {createSlice} from "@reduxjs/toolkit";

const gameStateSlice = createSlice({
    name: 'Game',
    initialState:{
        gState: "MAIN_MENU",

        gCols: 8,
        gRows: 8,

        gMines: 4,

        gScore: 0,

        gRemainingTime: undefined,

    },
    reducers: {
        setGameState(state, action)
        {
            state.gState = action.payload;
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

export const {setGameState, setGrid, setSettings, setScore, updateTimer} = gameStateSlice.actions;

export default gameStateSlice.reducer;