import { ThemeProvider as ThemePR } from "styled-components";

export const theme = {
  shadow1: "box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2)",
  green: "#00a353",
  white: "#fff",
  gray: "lightgray",
  border: "#ececec",
};

export const ThemeProvider = ({ children }) => (
  <ThemePR theme={theme}>{children}</ThemePR>
);
