import '../App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 15px;
  grid-area: 'header';

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

`

const LeftHeader = styled.div`
	  width: 200px;
  
  display: flex;
  align-self: center;
  justify-content: center;

`
const MidHeader = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  

  height: 2rem;
  border-right: solid white 1px;
  border-left: solid white 1px;

`
const RightHeader = styled.div`
	width: 200px;
  height: 40px;
  font-size: 14px;
  padding-left: 10px;
  

  display: flex;
  justify-content: center;  
  align-items: center;

`
const date = new Date('2024-07-10');
const today = new Date();

const startProject = date.toLocaleDateString();
const diffTimeStamp = Math.abs(today.getTime()-date.getTime());
const diffDays = Math.ceil(diffTimeStamp/(1000*60*60*24));
const diffMonth = Math.round(diffDays/30); 
const daysToday = new Date();
const diffCurrentDays = Math.abs(date.getDate() - daysToday.getDate());


function Header() {
    return (
			<Wrapper className="Header">

				<LeftHeader className="header-left">
					<p>Антон Дурасов</p>
				</LeftHeader>

				<MidHeader className="header-mid">
					<p>BusTracker хронология</p>
				</MidHeader>

				<RightHeader className="header-right">
					<span>Старт проекта: {startProject} </span> <br />
					<span>Прошло: {diffMonth}м {diffCurrentDays}д</span>
				</RightHeader>
			</Wrapper>
		);
    
}

export default Header;