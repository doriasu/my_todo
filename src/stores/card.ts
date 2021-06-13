import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardState = {
	id:number;
	title:string;
	text:string;
	url?:string;
	date:Date;
}
export type CardArray = {
	cards:CardState[];
}

const initialState:CardArray = {cards:[]}

export const cardSlice = createSlice({
	name:'card',
	initialState:initialState,
	reducers:{
		pushCard:(state, action:PayloadAction<CardState>)=>{
			// internally immer's method
			state.cards.push(action.payload)
		}
	}
})