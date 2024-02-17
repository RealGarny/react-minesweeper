import {createSlice} from "@reduxjs/toolkit";

const gameStateSlice = createSlice({
    name: 'Game',
    initialState:{
        gState: "MAIN_MENU",
        gIsLost: false,

        gCols: 8,
        gRows: 8,

        gMines: 4,

        gGrid: [],

        gScore: 0,

        gRemainingTime: undefined,

    },
    reducers: {
        setGameState(state, action)
        {
            state.gState = action.payload;
        },
        setGrid(state, action)
        {
            state.gGrid = action.payload;
        },
        setSettings(state, action)
        {
            state.gCols = action.payload.gCols;
            state.gRows = action.payload.gRows;
            state.gMines = action.payload.gMines;
        },
        addScore(state, action)
        {
            state.gScore += action.payload;
        },
        updateTimer(state,action)
        {
            
        }
    }

})

export const {setGameState, setGrid, setSettings, addScore, updateTimer} = gameStateSlice.actions;

export default gameStateSlice.reducer;