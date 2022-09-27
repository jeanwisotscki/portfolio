import Link from "next/link";

import styled from "styled-components";

const LogoText = styled.strong`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes.large};
  padding: 0.8rem 1rem 0.8rem 0;
  cursor: pointer;

  span {
    font-weight: 100;
  }
`;

export const Logo = () => {
  return (
    <Link href="/">
      <LogoText>
        <span>jW</span>.dev
      </LogoText>
    </Link>
  );
};
