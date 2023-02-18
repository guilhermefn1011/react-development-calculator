import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;\

`;

export const Content = styled.div`
  background-color: #000000;
  width: 50%;
  padding: 0.3rem;
`;

export const Row = styled.div`
  display: flex;
  flex: direction: row;
  justify-content: space-between;
  align-items: center;
  margin: .2rem;
`;

export const Colum = styled.div`
  display: flex;
  flex: direction: column;
  justify-content: space-between;
  align-items: center;
`;
