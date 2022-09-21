import React from "react";

interface IThemeContextProvider {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext({});

export default function ThemeContextProvider({
  children,
}: IThemeContextProvider) {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");
  console.log(theme);

  return (
    <ThemeContext.Provider value={(theme, setTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}
