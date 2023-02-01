import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      bgSecondary: string;

      textPrimary: string;
      textSecondary: string;

      primary: string;
      secondary: string;

      headerBorder: string;

      red: string;
      blue: string;
      pink: string;
      onyx: string;
      green: string;
      purple: string;
      yellow: string;
    };

    fontSizes: {
      normal: string;
      smMedium: string;
      medium: string;
      large: string;
      xtLarge: string;
    };
  }
}
