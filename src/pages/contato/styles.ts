import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 0 2rem;
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: 1rem;
`;
