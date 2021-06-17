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
	const update =()=>{
		dispatch(pushCard({id:1,title:"sample", text:"yeaaaaa", url:"localhost:8000", date:new Date()}))
	}
	return(
		<>
			<button onClick={update}>update</button>
			{JSON.stringify(cardArray)}
		</>
	)
}
export default Card;