import React from "react";
import Image from "next/image";

import { ThemeContext } from "../../contexts/ThemeContext";

import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  transition: 0.3s;
`;

export const ToggleThemeButton = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <Button onClick={handleTheme}>
      <Image
        src={theme === "light" ? "/sun.svg" : "/moon.svg"}
        width={25}
        height={25}
        alt="sun or moon icon"
        title="Trocar de tema"
      />
    </Button>
  );
};
