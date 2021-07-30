import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#52b788",
  primaryBright: "#80ed99",
  primaryDark: "#2d6a4f",
  secondary: "#1b4332",
  success: "#9B9694",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#b0ffb4",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fbfff7",
  backgroundDisabled: "#dde6da",
  contrast: "#d8f3dc", 
  invertedContrast: "#f1faee",
  input: "#80ed99",
  tertiary: "#EFF4F5",
  text: "#2d6a4f",
  textDisabled: "#a4a9ab",
  textSubtle: "#1b4332",
  borderColor: "#57cc99",
  card: "#d8f3dc",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#221922",
  background: "#fffdf7",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#191326",
  input: "#eeeaf4",
  primaryDark: "#F2DA91",
  tertiary: "#f7e9dc",
  text: "#221922",
  textDisabled: "#BDC2C4",
  textSubtle: "#221922",
  borderColor: "#524B63",
  card: "#F2DA91",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
