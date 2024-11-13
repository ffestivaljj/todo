import styled from "styled-components";


const Wrapper = styled.div`
	grid-area: "tasks";
	text-align: center;
	border-right: solid white 1px;
	
	`;
	
	const Title = styled.h3`
`;

const TasksList = styled.ul`
padding: 20px 40px;
font-size: 24px;
text-align: left;

height: 100%;
`;

const ListItem = styled.li`
	padding-bottom: 20px;
	list-style: 1;
`;

const MyTasks = () => {
	return (
		<Wrapper>
			<Title>Задачи</Title>
			<TasksList>
				<ListItem>Снабдить BusTracker новыми схемами карт</ListItem>
				<ListItem>Добавить темную тему, ее переключение и автоподтягивание из ОС пользователя</ListItem>
			</TasksList>
		</Wrapper>
	);
};

export default MyTasks;
