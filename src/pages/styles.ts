import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

export const Header = styled.div`
  padding: 1rem;

  @media (max-width: 769px) {
    margin-top: 1rem;
  }
`;

export const Presentation = styled.div`
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
      font-size: 5rem;
      line-height: 0;

      @media (max-width: 769px) {
        font-size: 3rem;
      }
    }
  }
`;

export const Stacks = styled.strong`
  color: ${(props) => props.theme.colors.secondary};
  display: block;
  margin: 0.5rem 0;
  text-align: center;
  opacity: 0.4;
`;

export const DescriptionWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  opacity: 0.7;

  p {
    font-size: 1.5rem;
    text-align: justify;
  }

  @media (max-width: 769px) {
    margin-top: 2rem;
  }
`;
