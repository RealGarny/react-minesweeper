import {createSlice} from "@reduxjs/toolkit";

const gameStateSlice = createSlice({
    name: 'Game',
    initialState:{
        mState: "MAIN_MENU",

        gDifficulty: "normal",

        gCols: 8,
        gRows: 8,

        gMines: 4,
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
            state.gDifficulty = action.payload.gDifficulty;
        },
    }

})

export const {setMenuState, setSettings} = gameStateSlice.actions;

export default gameStateSlice.reducer;