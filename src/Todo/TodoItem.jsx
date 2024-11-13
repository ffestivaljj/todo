import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";
import styled from "styled-components";

const List = styled.li`
	padding-left: 50px;
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 10px;
`;
const DeleteSymbol = styled.span`
	display: flex;
	align-self: flex-start;

	color: red;
	cursor: pointer;
	font-size: 20px;
`;

const TodoCreatedAt = styled.span`
	font-size: 15px;
	color: gray;
`;


const TodoItem = ({ id, text, completed, day, time}) => {
	const dispatch = useDispatch();

	

	return (
		<List>
			<TodoCreatedAt> 
				{day} [{time}]				
			</TodoCreatedAt>
			<input
				type="checkbox"
				checked={completed}
				onChange={() => dispatch(toggleTodoComplete({ id }))}
			/>
			<span>
				
				{text}
			</span>
			<DeleteSymbol
				className="delete"
				onClick={() => dispatch(removeTodo({ id }))}
			>
				&times;
			</DeleteSymbol>
		</List>
	);
};

export default TodoItem;
