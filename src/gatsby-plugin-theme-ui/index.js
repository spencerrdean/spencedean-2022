import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
  fonts: {
    heading: `"Nabla", cursive`,
  },
});

export default theme;