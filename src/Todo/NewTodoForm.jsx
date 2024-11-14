// eslint-disable-next-line no-unused-vars
import styled from "styled-components";

const TodoForm = styled.label`
	grid-area: "input";
	display: flex;
	justify-content: center;
	height: 30px;
`;

const InputField = styled.input`
	width: 400px;
	height: 30px;
	border: solid silver 2px;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	padding-left: 5px;
`;

const SubmitButton = styled.button`
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	border: solid silver 2px;
	border-left: none;
	width: 100px;
	cursor: pointer;
	&:hover {
	background-color: #330099;
	color: white;
	}
`;

const NewTodoForm = ({ text, updateText, handleAction }) => {

	return (
		<TodoForm>
			<InputField 
				id='input__todo'
				placeholder="New todo"
				value={text}
				onChange={(e) => updateText(e.target.value)}
			/>

			<SubmitButton id='addTodoButton' onClick={handleAction} >Add Todo</SubmitButton>
		</TodoForm>
	);
};

export default NewTodoForm;
