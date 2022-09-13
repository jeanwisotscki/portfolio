import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.red};

  button {
    background: none;
    width: 100%;
    color: ${(props) => props.theme.colors.red};
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1.2rem;
`;
