import styled from "styled-components";

export const Title = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 2rem 0;

  @media (max-width: 769px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;
