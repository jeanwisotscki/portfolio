import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;

  @media (max-width: 769px) {
    justify-content: start;
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 50%;
  width: 50%;

  span {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.5rem;
  }

  div {
    span {
      color: ${(props) => props.theme.colors.green};
      margin-right: 0.5rem;

      &::before {
        content: "~~ ";
      }
    }

    strong {
      color: ${(props) => props.theme.colors.primary};
      font-size: 3rem;
      line-height: 0;
    }
  }

  @media (max-width: 769px) {
    margin-top: 3rem;
    min-width: 100%;
  }
`;

export const Stacks = styled.strong`
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 0.5rem;
  opacity: 0.4;
`;

export const DescriptionWrapper = styled.div`
  max-width: 50%;
  width: 50%;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 769px) {
    min-width: 100%;
    margin-top: 2rem;
  }
`;
