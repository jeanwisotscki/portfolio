import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #0d0f39;
  padding: 0 2rem;
`;

export const ContentContainer = styled.div`
  max-width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Hamburger = styled.button`
  background: none;
  color: #fff;
  font-size: 2rem;
  padding: 0 0.5rem;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;
