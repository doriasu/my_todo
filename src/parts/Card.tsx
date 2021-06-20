import { VFC } from "react";
import { CardProps } from "../stores/card";
const Card: VFC<CardProps> = (props: CardProps) => {
	return (
		<div key={props.id} className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
			<div>
				<h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
				<p className="mt-2 text-gray-600">{props.text}</p>
			</div>
			<div className="flex justify-end mt-4">
				<a href="#" className="text-xl font-medium text-indigo-500">{props.date}</a>
			</div>
		</div>
	)
}
export default Card;