import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 17rem;
  margin: 0 auto;
`;

export const ImgWrapper = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 10rem;
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
