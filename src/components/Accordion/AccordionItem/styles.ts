import styled from "styled-components";

export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  cursor: pointer;
`;

export const Question = styled.h3`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};

  &::before {
    content: "<";
    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-right: 0.5rem;
  }

  &::after {
    content: "/>";
    color: ${(props) => props.theme.colors.blue};
    font-size: ${(props) => props.theme.fontSizes.medium};
    line-height: 0.9;
    margin-left: 0.5rem;
  }

  @media (max-width: 769px) {
    font-size: ${(props) => props.theme.fontSizes.smMedium};

    &::before {
      font-size: ${(props) => props.theme.fontSizes.smMedium};
    }

    &::after {
      font-size: ${(props) => props.theme.fontSizes.smMedium};
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  padding-left: 2rem;
  padding-right: 4rem;

  &::before {
    content: "~$";
    color: ${(props) => props.theme.colors.pink};
    font-size: ${(props) => props.theme.fontSizes.smMedium};
    font-weight: bold;
    margin-right: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.smMedium};
    text-align: justify;
  }

  @media (max-width: 769px) {
    padding-left: 1rem;
    padding-right: 2rem;

    &::before {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }
  }
`;
