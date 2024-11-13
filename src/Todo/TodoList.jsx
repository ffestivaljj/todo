import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import styled from "styled-components";


const TodoItemsWrapper = styled.div`
padding-top: 20px;
	display: flex;
	flex-direction: column;

`;

const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos);
	return (
			<TodoItemsWrapper>
				{todos.map((todo) => (
					<TodoItem key={todo.id} {...todo} />
				))}
			</TodoItemsWrapper>
			
	);
};

export default TodoList;
