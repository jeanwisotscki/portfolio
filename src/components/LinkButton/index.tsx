import Link from "next/link";

interface LinkButtonProps {
  href: string;
  textContent: string;
}

export default function LinkButton(props: LinkButtonProps) {
  return <Link href={props.href}>{props.textContent}</Link>;
}
