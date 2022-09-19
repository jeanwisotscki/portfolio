import { Title } from "./styles";

interface PageTitleProps {
  title: string;
  borderColor: "blue" | "purple" | "red" | "white";
}

export const PageTitle = (props: PageTitleProps) => {
  const borderColor =
    props.borderColor === "purple"
      ? "#b93bf4"
      : props.borderColor === "blue"
      ? "#2647f4"
      : props.borderColor === "red"
      ? "#f43b3b"
      : "white";

  return (
    <Title style={{ borderBottom: `3px solid ${borderColor}` }}>
      {props.title}
    </Title>
  );
};
