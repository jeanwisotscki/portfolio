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

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("@theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("@theme", "light");
    }
  }

  return (
    <Button onClick={toggleTheme}>
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
