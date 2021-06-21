import { FC, useRef } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AppState } from "../store";
import { cardSlice } from "../stores/card";
import { nowIdSlice } from "../stores/id";

const Form: FC = () => {
	const dispatch = useDispatch();
	const { pushCard } = cardSlice.actions;
	const {increment } = nowIdSlice.actions;
	const titleRef = useRef<HTMLInputElement>(null);
	const textRef = useRef<HTMLInputElement>(null);
	const urlRef = useRef<HTMLInputElement>(null);
	const {nowId} = useSelector<AppState,{nowId:number}>((state)=>{
		return{
			nowId:state.nowID.nowId
		}
	})
	const initialize = () =>{
		if(titleRef.current?.value){
			titleRef.current.value=""
		}
		if(textRef.current?.value){
			textRef.current.value=""
		}
		if(urlRef.current?.value){
			urlRef.current.value=""
		}
	}
	const addTodo = ()=>{
		if(titleRef.current?.value&&textRef.current?.value){
			const title = titleRef.current.value;
			const text = textRef.current.value;
			if(urlRef.current?.value){
				const url = urlRef.current.value;
				dispatch(pushCard({id:nowId,title:title, text:text, url:url,status:"TODO", date:new Date().toJSON()}))
				dispatch(increment())
				initialize();
			}else{
				dispatch(pushCard({id:nowId,title:title, text:text, status:"TODO", date:new Date().toJSON()}))
				dispatch(increment())
				initialize();
			}
		}	

	}
	return (

		<div className="w-full max-w-xs">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Title
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title" ref={titleRef} />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Text
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="text" ref={textRef} />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						URL
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="url" ref={urlRef} />
				</div>
				<div className="flex justify-center">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={addTodo}>
						ADD TODO
					</button>
				</div>
			</form>
		</div>


	)
}
export default Form;