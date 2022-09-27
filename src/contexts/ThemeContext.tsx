import React from "react";

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

type ThemeContextType = {
  theme: string;
  setTheme: (newState: string) => void;
};

const defaultValue = {
  theme: "dark",
  setTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultValue);

export default function ThemeContextProvider({
  children,
}: IThemeContextProviderProps) {
  const [theme, setTheme] = React.useState(defaultValue.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
