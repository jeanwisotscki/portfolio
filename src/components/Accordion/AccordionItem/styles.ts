import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
`;

export const QuestionWrapper = styled.div`
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid red;

  svg {
    width: 30px;
  }
`;

export const Question = styled.h3`
  color: red;
`;

export const Answer = styled.p`
  color: yellow;
`;
