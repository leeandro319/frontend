import { Container } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 180px;
    height: 150px;
    margin: 40px auto;
  }
`;

export const Form = styled.form`
  width: calc(80% - 80px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px){
    flex-direction: column;
    width: 80%;
    
  }

  margin-bottom: 30px;

  button {
    margin: 0 0 0 10px;
    padding: 15px;

    @media (max-width: 600px){
      margin: 10px 0 0 10px;
      width: 80%;
      padding: 10px;
    }
  }
`;

export const Error = styled.span`
  border: 1px solid red;
  padding: 10px 10%;
  border-radius: 05px;
  margin-bottom: 30px;
  color: red;
`;
