import styled from "styled-components"

const violetText = "#f2e5fa";

const Container =  styled.div` 
  display: flex;
  /*  padding: 20px;*/
  width: 100%;
  background-color: violet;
  height: 100px;
  background-image: linear-gradient(to right, pink, lightgreen);
  
  h2 {
    font-size: 35px;
    margin-left: 20px;
    color: ${violetText};
  }
`;

const setTransitionTime = (time) => `all ${time} ease-out`;

const ButtonContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  align-items: center;
    
  button {
    margin: 10px;
    height: 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: ${setTransitionTime("0.7s")};
        
    &:hover {
      background-color: ${violetText};
      color: aliceblue;
    }
  }
`;

export { Container, ButtonContainer };
