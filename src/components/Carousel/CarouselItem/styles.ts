import styled from "styled-components";

export const CardWrapper = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  min-height: 17rem;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  margin-bottom: 3rem;

  @media (max-width: 769px) {
    max-width: 17rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ImgWrapper = styled.div`
  background-color: #333333;
  width: 100%;
  height: 100%;
`;

export const TextsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 769px) {
    padding: 1rem 0;
  }
`;

export const CardTitle = styled.h3`
  span {
    color: ${(props) => props.theme.colors.yellow};
  }

  &::before {
    content: "cd";
    color: ${(props) => props.theme.colors.pink};
    margin-right: 0.5rem;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  padding: 0.5rem;

  &::before {
    content: "~$";
    color: ${(props) => props.theme.colors.pink};
    margin-right: 0.5rem;
  }
`;
