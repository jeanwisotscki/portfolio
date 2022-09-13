import styled from "styled-components";

export const Title = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.large};
  border-bottom: 3px solid ${(props) => props.theme.colors.red};
  margin-top: 2rem;
`;
