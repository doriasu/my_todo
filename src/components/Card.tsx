import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { cardSlice, CardState } from "../stores/card";
const Card:FC=()=>{
	const {cardArray} = useSelector<AppState, {cardArray:CardState[]}>((state)=>{
		return{
			cardArray:state.card.cards
		}
	})
	const dispatch = useDispatch();
	const {pushCard} = cardSlice.actions;
}