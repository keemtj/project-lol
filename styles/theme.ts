const font = {
  size: {
    s: "1rem",
    m: "1.1rem",
    l: "1.2rem",
    xl: "1.6rem",
    title: "4.8rem",
  },
  weight: {
    normal: 500,
    bold: 700,
  },
};

const radius = {
  s: "0.2rem",
  m: "0.4rem",
  l: "0.6rem",
};

const light = {
  bgColor: "#F5F5F5",
  text: "#2D2B2E",
  border: "#666666",
  selectBgColor: "#FFFFFF",
  selectBorder: "#BBBBBB",
  dropDownBgColor: "#F8F8F8",
  dropDownActive: "#EEEEEE",
  chart: "#318EEF",
  chartBorder: "#DDDDDD",
};

const defaultTheme = {
  font,
  radius,
};

export const theme = {
  ...defaultTheme,
  color: light,
};
