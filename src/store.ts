import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { cardSlice, CardArray } from "./stores/card";

export type AppState = {
	card:CardArray;
}

const rootReducer = combineReducers<AppState>({
	card:cardSlice.reducer
})

const store = configureStore({reducer:rootReducer})

export default store;