import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { cardSlice, CardArray } from "./stores/card";
import { nowIdProps, nowIdSlice } from "./stores/id";

export type AppState = {
	card:CardArray;
	nowID:nowIdProps;
}

const rootReducer = combineReducers<AppState>({
	card:cardSlice.reducer,
	nowID:nowIdSlice.reducer

})

const store = configureStore({reducer:rootReducer})

export default store;