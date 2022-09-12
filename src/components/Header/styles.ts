import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.bgDarkBlue};
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
  color: ${(props) => props.theme.colors.red};
  font-size: 2rem;
  padding: 0 0.5rem;
  border: none;
  outline: none;
`;
