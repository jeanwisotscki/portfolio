import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext({});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// React.useEffect(() => {
//   // const actualTheme: string = JSON.parse(localStorage.getItem("thee")!);

//   setTheme(actualTheme);
// }, [theme]);
