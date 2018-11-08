import { default as defaultTheme } from "mdx-deck/themes";

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    preBackground: "rgb(33,39,51)",
    pre: "rgb(204,201,194)"
  },
  css: {
    fontSize: "16px",
    textAlign: "center"
  }
};

export default theme;
