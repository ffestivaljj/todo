/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { useState } from "react";

import styled from "styled-components";

import TodoList from "../Todo/TodoList";
import NewTodoForm from "../Todo/NewTodoForm";
import { addTodo } from "../store/todoSlice";
import MyTasks from "./MyTasks";
import "../App.css";

const MainWrapper = styled.div`
	padding: 20px;
	grid-area: "main";
	background-color: #ff9966;

	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-areas: "tasks todo"
	
	border: solid black 2px;
`;

const TodoSection = styled.div`
	grid-area: "todo";
`;

// const submitEnter = document.getElementById("input__todo");
// submitEnter.addEventListener("keyup", ({ key }) => {
// 	if (key === "Enter") {
// 		document.getElementById("addTodoButton").click();
// 	}
// });


	const submitEnter = document.getElementById("input__todo");
	if (submitEnter) {
	submitEnter.addEventListener("keyup", ({ key }) => {
			if (key === "Enter") {
				document.getElementById("addTodoButton").click();
			}
		});
	};


function Main() {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleAction = () => {
		if (text.trim().length) {
			dispatch(addTodo({ text }));
			setText("");
		}
	};

	return (
		<MainWrapper className="Main">
			<MyTasks />
			<TodoSection>
				<NewTodoForm
					text={text}
					updateText={setText}
					handleAction={handleAction}
					// submitEnter={submitEnter}
				/>

				<TodoList />
			</TodoSection>
		</MainWrapper>
	);
}
// console.log('submitEnter', submitEnter);

export default Main;
