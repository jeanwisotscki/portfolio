import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 2rem;
`;

export const TextContainer = styled.article`
  margin: 3rem 0;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.large};
    margin: 1rem 0;

    &::before {
      content: "<";
      color: ${(props) => props.theme.colors.blue};
      font-size: ${(props) => props.theme.fontSizes.large};
      margin-right: 0.5rem;
    }

    &::after {
      content: "/>";
      color: ${(props) => props.theme.colors.blue};
      font-size: ${(props) => props.theme.fontSizes.large};
      line-height: 0.9;
      margin-left: 0.5rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.smMedium};
    text-align: justify;
  }

  a {
    color: ${(props) => props.theme.colors.blue};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 769px) {
    margin: 1rem 0;

    h2 {
      font-size: ${(props) => props.theme.fontSizes.medium};

      &::before {
        font-size: ${(props) => props.theme.fontSizes.medium};
      }

      &::after {
        font-size: ${(props) => props.theme.fontSizes.medium};
      }
    }

    p {
      font-size: ${(props) => props.theme.fontSizes.normal};
    }
  }
`;
