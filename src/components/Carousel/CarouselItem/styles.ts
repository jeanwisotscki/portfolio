import styled from "styled-components";

export const CardWrapper = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  width: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme.colors.purple};
`;

export const ImgWrapper = styled.div<{ thumbnail: string }>`
  width: 100%;
  height: 13rem;
  background-image: url(${(props) => props.thumbnail});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
  text-align: justify;

  &::before {
    content: "~$";
    color: ${(props) => props.theme.colors.pink};
    margin-right: 0.5rem;
  }
`;
