import styled from "styled-components";

export const ButtonWrapper = styled.div<{
  borderColor: "red" | "blue" | "purple" | "white";
}>`
  display: flex;
  border: 2px solid;
  border-color: ${(props) =>
    props.borderColor === "red"
      ? props.theme.colors.red
      : props.borderColor === "blue"
      ? props.theme.colors.blue
      : props.borderColor === "purple"
      ? props.theme.colors.purple
      : "white"};
`;

export const Button = styled.button<{
  color: "red" | "blue" | "purple" | "white";
}>`
  color: ${(props) =>
    props.color === "red"
      ? props.theme.colors.red
      : props.color === "blue"
      ? props.theme.colors.blue
      : props.color === "purple"
      ? props.theme.colors.purple
      : "white"};
  background: none;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  outline: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 1.2rem;
`;
