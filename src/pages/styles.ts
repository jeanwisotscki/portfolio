import styled from "styled-components";

export const Container = styled.div`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 769px) {
    justify-content: initial;
  }
`;

export const Header = styled.div`
  padding: 1rem;

  @media (max-width: 769px) {
    margin-top: 2rem;
    padding: 0 1rem;
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
      font-size: 4rem;
      line-height: 0;

      @media (max-width: 769px) {
        font-size: 3rem;
        line-height: 0.6;
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

export const Description = styled.div`
  color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  opacity: 0.7;

  p {
    font-size: 1.5rem;
    text-align: justify;
    margin: 1rem 0;
  }

  a {
    color: ${(props) => props.theme.colors.green};
    margin: 0 0.5rem;
    text-decoration: underline;
    transition: 0.3s;
  }

  @media (max-width: 769px) {
    margin-top: 2rem;
    padding: 0 1rem;
  }
`;

export const SeeMoreContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 0.5rem;
  transition: 0.3s;
  cursor: pointer;

  a {
    color: ${(props) => props.theme.colors.primary};
    position: relative;

    &::before {
      content: "";
      background-color: ${(props) => props.theme.colors.green};
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }
  }

  &:hover {
    gap: 1rem;

    a {
      &::before {
        width: 100%;
      }
    }
  }
`;
