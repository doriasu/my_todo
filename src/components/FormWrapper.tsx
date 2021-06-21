import { useEffect, useRef } from "react";
import Form from "../parts/Form";
type FormWrapperProps={
	exist:boolean;
}
const FormWrapper=(props:FormWrapperProps)=>{
	const wrapperRef = useRef<HTMLDivElement>(null);
	useEffect(()=>{
		if(wrapperRef.current)
		if(props.exist){
			wrapperRef.current.style.display='initial'
			wrapperRef.current.style.zIndex='2147483647';
		}else{
			wrapperRef.current.style.display='none';

		}
		
	},[props.exist])
	return(
		<div ref={wrapperRef}>
			<Form />
		</div>
	)
}
export default FormWrapper;