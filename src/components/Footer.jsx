import styled from "styled-components";

const Wrapper = styled.div `
  grid-area: 'footer';
  font-size: 15px;

  display: flex;
  justify-content: center;

`;





function Footer() {
    return (
    <Wrapper>
        <p>
          Footer
        </p>
        
      </Wrapper>
      
    );
    
}

export default Footer;