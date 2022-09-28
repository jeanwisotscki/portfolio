import styled from "styled-components";

export const Container = styled.div``;

export const TextContainer = styled.div`
  margin: 2rem 0;

  h2 {
    color: ${(props) => props.theme.colors.primary};
  }
  p {
    color: ${(props) => props.theme.colors.secondary};
    text-align: justify;
  }

  a {
    color: ${(props) => props.theme.colors.blue};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
