import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overscroll-behavior: none;
  }

  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }

.App-root{
  font-family: sans-serif;
	font-size: 30px;
	width: 100%;
	min-height: 100vh;
	background-color: #ff6633;
	display: grid;
	grid-template-rows: 50px 1fr 15px;
	grid-template-areas:
		"header"
		"main"
		"footer";
	color: white;
}


input:checked + span {  
  text-decoration: line-through white 2px; 
  color: gray;
}

.checkbox {
  padding-right: 10px;
}


    `;

    export default GlobalStyle;