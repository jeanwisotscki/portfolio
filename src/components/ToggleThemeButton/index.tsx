import React from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

export const ToggleThemeButton = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  // console.log(theme);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return <button onClick={handleTheme}>toggle theme</button>;
};
