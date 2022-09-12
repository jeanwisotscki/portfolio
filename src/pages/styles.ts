import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.lightBlue};
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-left: 2rem;
  }
`;
