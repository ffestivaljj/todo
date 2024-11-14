import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";
import styled from "styled-components";

const List = styled.li`
	padding-bottom: 5px;
	display: flex;
	justify-content: start;
	align-items: start;
	gap: 10px;

	@media (max-width: 1200px) {
		align-items: center;		
		padding-left: 20px;
	}

	@media (min-width: 1201px) {
		padding-left: 50px;
	}
`;

const DeleteSymbol = styled.span`
	display: flex;
	align-content: flex-start;
	color: violet;
	cursor: pointer;
	font-size: 20px;
`;

const TodoCreatedAt = styled.span`
	display: flex;
	align-self: flex-start;
	color: lightblue;

	@media (max-width: 1200px) {
		padding-top: 0px;
		width: 50px;
		font-size: 9px;
	}

	@media (min-width: 1201px) {
		padding-top: 1px;
		width: 150px;
		font-size: 15px;
	}
`;

const TodoItem = ({ id, text, completed, day, time }) => {
	const dispatch = useDispatch();

	return (
		<List>
			<TodoCreatedAt>
				{day} [{time}]
			</TodoCreatedAt>
			<label class="custom-checkbox">
				<input
					value="yes"
					type="checkbox"
					checked={completed}
					onChange={() => dispatch(toggleTodoComplete({ id }))}
				/>
				<div class="todo-massege" id="text">
					{text}
				</div>
			</label>

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
