import { configureStore, createSlice } from "@reduxjs/toolkit";

const ImageData = createSlice({
    name:'ImageData',
    initialState:{data:[]},
    reducers:{
        getData(state,action){
            return state.data
        },
        addData(state,action){
            state.data = action.payload;
        }
    }
});

export const actions = ImageData.actions;
export const store = configureStore({
    reducer:ImageData.reducer
});