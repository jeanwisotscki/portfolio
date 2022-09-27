import React from "react";

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

type ThemeContextType = {
  theme: string;
  setTheme: (newState: string) => void;
};

const defaultValue = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultValue);

export default function ThemeContextProvider({
  children,
}: IThemeContextProviderProps) {
  const [theme, setTheme] = React.useState(defaultValue.theme);

  React.useEffect(() => {
    const actualThemeInStorage = localStorage.getItem("@theme");

    if (!actualThemeInStorage)
      return localStorage.setItem("@theme", defaultValue.theme);

    if (actualThemeInStorage) return setTheme(actualThemeInStorage);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
