import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { cardSlice, CardProps } from "../stores/card";
import Card from "../parts/Card";
const CardBoard:FC=()=>{
	const {cardArray} = useSelector<AppState, {cardArray:CardProps[]}>((state)=>{
		return{
			cardArray:state.card.cards
		}
	})
	const dispatch = useDispatch();
	const {pushCard, deleteCard} = cardSlice.actions;
	
	return(
		<div className="static">
			{cardArray.map((card)=>{return(<Card key={card.id} delete={()=>dispatch(deleteCard(card.id))} {...card} />)})}
		</div>
	)
}
export default CardBoard;