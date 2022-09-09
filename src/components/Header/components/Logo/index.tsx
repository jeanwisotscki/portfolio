import Link from "next/link";

import styled from "styled-components";

const LogoText = styled.h1`
  color: #fff;
  padding: 0.8rem 1rem;
  cursor: pointer;
`;

export const Logo = () => {
  return (
    <Link href="/">
      <LogoText>jW.dev</LogoText>
    </Link>
  );
};
