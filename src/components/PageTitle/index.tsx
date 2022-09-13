import { Title } from "./styles";

interface PageTitleProps {
  title: string;
}

export const PageTitle = (props: PageTitleProps) => {
  return <Title>{props.title}</Title>;
};
