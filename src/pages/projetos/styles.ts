import styled from "styled-components";

export const Container = styled.div`
  min-height: 70vh;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: justify;
  padding: 0 4rem;

  @media (max-width: 769px) {
    font-size: ${(props) => props.theme.fontSizes.normal};
    padding: 0 1rem;
  }
`;

export const CarouselWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;
