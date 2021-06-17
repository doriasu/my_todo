import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CardStatus="TODO"|"DOING"|"DONE";
export type CardProps = {
	id:number;
	title:string;
	text:string;
	url?:string;
	status:CardStatus;
	date:Date;
}
export type CardArray = {
	cards:CardProps[];
}

const initialState:CardArray = {cards:[]}

export const cardSlice = createSlice({
	name:'card',
	initialState:initialState,
	reducers:{
		pushCard:(state, action:PayloadAction<CardProps>)=>{
			// internally immer's method
			state.cards.push(action.payload)
		}
	}
})