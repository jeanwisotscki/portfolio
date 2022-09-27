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
    font-size: ${(props) => props.theme.fontSizes.normal};

    &::before {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }

    &::after {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }
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
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: justify;

  &::before {
    content: "~$";
    color: ${(props) => props.theme.colors.pink};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: bold;
    margin-right: 0.5rem;
  }

  @media (max-width: 769px) {
    font-size: ${(props) => props.theme.fontSizes.normal};

    &::before {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }
  }
`;
