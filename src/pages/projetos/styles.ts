import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #fff;

  @media (max-width: 769px) {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
`;
