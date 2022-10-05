import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

export const Container = styled.main`
  max-width: 50rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 5rem;
`;
