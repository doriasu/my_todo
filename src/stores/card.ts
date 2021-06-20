import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CardStatus="TODO"|"DOING"|"DONE";
export type CardProps = {
	id:number;
	title:string;
	text:string;
	url?:string;
	status:CardStatus;
	date:string;
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
		},
		deleteCard:(state, action:PayloadAction<number>)=>{
			return{cards:state.cards.filter(card=>card.id!==action.payload)}
		}
	}
})