import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type nowIdProps={
	nowId:number;
}
const initialState:nowIdProps={nowId:0}

export const nowIdSlice = createSlice({
	name:'nowId',
	initialState:initialState,
	reducers:{
		increment:(state)=>{
			return{
				nowId:state.nowId+1
			}
		}
	}
})
