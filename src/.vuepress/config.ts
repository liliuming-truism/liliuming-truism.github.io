import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Truism World",
  description: "There is no truth here.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
