import styled from "styled-components";

export const CardWrapper = styled.div`
  min-height: 17rem;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 0 auto;
  margin-bottom: 3rem;
  border: 1px solid white;

  @media (max-width: 769px) {
    max-width: 17rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ImgWrapper = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100%;
`;

export const TextsWrapper = styled.div`
  width: 100%;
  height: 10rem;
`;

export const CardTitle = styled.h3`
  margin: 0.5rem 0;

  span {
    color: yellow;
  }

  &::before {
    content: "cd";
    color: #b2156a;
    margin-right: 0.5rem;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-left: 1rem;

  &::before {
    content: "~$";
    color: #b2156a;
    margin-right: 0.5rem;
  }
`;
