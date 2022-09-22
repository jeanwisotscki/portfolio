import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    justify-content: start;
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  max-width: 50%;
  width: 50%;
  /* border: 1px solid red; */

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
      /* display: block; */
      color: ${(props) => props.theme.colors.primary};

      font-size: 3rem;
      line-height: 0;
    }
  }

  strong {
    /* display: block; */
    color: ${(props) => props.theme.colors.primary};

    font-size: 3rem;
  }

  @media (max-width: 769px) {
    margin-top: 3rem;
    min-width: 100%;
  }
`;

// const carousel = keyframes`
//   0% { transform: translateX(0); }
//   25% { transform: translateX(-10%); }
//   75% { transform: translateX(10%); }
//   100% { transform: translateX(0); }

// `;

export const Stacks = styled.strong`
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 0.5rem;
  opacity: 0.3;
  /* animation: ${carousel} 3s linear infinite; */
`;

export const TextWrapper = styled.div`
  max-width: 50%;
  width: 50%;
  color: ${(props) => props.theme.colors.primary};

  /* border: 1px solid red; */

  @media (max-width: 769px) {
    min-width: 100%;
    margin-top: 2rem;
  }
`;
