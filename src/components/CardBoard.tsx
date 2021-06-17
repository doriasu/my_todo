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
	const {pushCard} = cardSlice.actions;
	const update =()=>{
		dispatch(pushCard({id:1,title:"sample", text:"yeaaaaa", url:"localhost:8000",status:"DOING", date:new Date()}))
	}
	return(
		<>
			<button onClick={update}>update</button>
			{cardArray.map((card)=>{return(<Card {...card} />)})}
		</>
	)
}
export default CardBoard;