import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    gray: {
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
    };
    tint: {
      blue: string;
      green: string;
      indigo: string;
      orange: string;
      pink: string;
      purple: string;
      red: string;
      teal: string;
      yellow: string;
    };
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    label: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
    };
    separator: {
      opaque: string;
      nonOpaque: string;
    };
    groupedBackground: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    fill: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
    };
    disabled: string;
  }
}
