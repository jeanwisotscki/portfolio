import styled from "styled-components";

export const Container = styled.div``;

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  cursor: pointer;
`;

export const Question = styled.h3`
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;

  &::before {
    content: "<";
    color: ${(props) => props.theme.colors.blue};
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  &::after {
    content: "/>";
    color: ${(props) => props.theme.colors.blue};
    font-size: 1.5rem;
    line-height: 0.9;
    margin-left: 0.5rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const Answer = styled.p`
  color: ${(props) => props.theme.colors.white};

  &::before {
    content: "~$";
    color: ${(props) => props.theme.colors.red};
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-right: 0.5rem;
  }
`;
