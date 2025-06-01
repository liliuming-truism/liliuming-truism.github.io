import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客文章",
    icon: "pen-to-square",
    link: "/posts/",
  },
  {  
    text: "读书笔记",
    icon: "book",
    link: "/readnotes/",
  },
]);
