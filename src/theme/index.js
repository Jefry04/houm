import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary:"#616161",
    secondary:"#f4364c",
    text:"white",
    title:"#424242",
    hover:"rgb(178, 48, 30)"
  },
  fonts: {
    heading: `nunito,sans-serif, ${base.fonts?.heading}`,
    body: `nunito, sans-serif, ${base.fonts?.body}`,
  },
});

export default theme;
