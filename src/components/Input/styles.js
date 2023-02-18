import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #000000;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    background-color: #c2cfd1;
    border: 0;
    padding: 0 10px;
    border-radius: 1rem;
    margin: 0.2rem;

    flex-direction: row;
    align-items: flex-end;

    font-size: 32px;
    font-family: "Roboto";
    color: #000000;
  }
`;
