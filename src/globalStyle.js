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
	font-size: 25px;
	width: 100%;
	min-height: 100vh;
  background: -webkit-linear-gradient(45deg, rgb(78, 10, 146), rgb(18, 26, 133) 50%, rgb(66, 10, 146) 100%);
  background: -moz-linear-gradient(45deg, rgb(78, 10, 146), rgb(18, 26, 133) 50%, rgb(66, 10, 146) 100%);
  background: linear-gradient(45deg, rgb(78, 10, 146), rgb(18, 26, 133) 50%, rgb(66, 10, 146) 100%);

	display: grid;
	grid-template-rows: 50px 1fr 15px;
	grid-template-areas:
		"header"
		"main"
		"footer";
	color: white;
}
.custom-checkbox{
  @media (max-width: 1200px) {
  max-width: 500px; 
  font-size: 12px; 
  }
  
  @media  (min-width: 1201px) {
  max-width: 1000px;  
  font-size: 18px;
  }
}
#text {
  overflow-wrap: break-word;
  white-space: pre-wrap; /* Норма в CSS3 */
  white-space: -moz-pre-wrap; /* Firefox не забывает */
  white-space: -pre-wrap
}

input:checked + div { 
  text-decoration: line-through white 1px; 
  color: gray;  
}

.custom-checkbox>input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox>div {
  display: inline-flex;
  align-items: top;
  user-select: none;
}

.custom-checkbox>div::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox>input:not(:disabled):not(:checked)+div:hover::before {
  border-color: #b3d7ff;
  cursor: pointer;
}

.custom-checkbox>input:active+div::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;  
}

.custom-checkbox>input:focus:not(:checked)+div::before {
  border-color: #80bdff;
}

.custom-checkbox>input:checked+div::before {  
  border-color: #0b76ef;
  background-color: violet;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='blue' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
`;

export default GlobalStyle;