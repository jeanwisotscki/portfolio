import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 3rem 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.headerBorder};

  @media (max-width: 769px) {
    padding: 1rem 2rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
