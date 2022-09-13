import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.lightBlue};
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 769px) {
    justify-content: start;
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 50%;
  width: 50%;
  text-align: center;

  @media (max-width: 769px) {
    margin-top: 3rem;
  }
`;

export const TextWrapper = styled.div`
  max-width: 50%;
  width: 50%;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  @media (max-width: 769px) {
    min-width: 100%;
    margin-top: 2rem;
    text-align: center;

    h1 {
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
  }
`;
