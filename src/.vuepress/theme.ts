import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",
  pure: true,
  author: {
    name: "Mr.Li",
    url: "https://mister-hope.com",
  },

  logo: "/qiyu.png",

  docsDir: "src",
  

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Default footer",


  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  blog: {
    avatar: "/qiyu.png",
    name: "Mr.Li",
    description: "A Backend programmer",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/liliuming-truism",
      Wechat: "weixin://dl/chat?_README_"
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

  },

  plugins: {
    blog: true,
    copyright: true,
    search: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

  },
});
