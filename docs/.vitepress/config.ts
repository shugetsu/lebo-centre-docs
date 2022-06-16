import { defineConfig } from "vitepress";

export default defineConfig({
  mpa: true,
  lang: "zh-CN",
  title: "乐播投屏文档中心",
  description: "乐播投屏产品文档中心",
  lastUpdated: true,
  themeConfig: {
    logo: "/imgs/logo.png",
    nav: [{ text: "变更日志", link: "" }],
    sidebar: [
      {
        text: "乐播投屏企业版",
        collapsed: true,
        collapsible: true,
        items: [
          { text: "Web SDK", link: "/lebo-enterprise-edition/web" },
          { text: "Android SDK", link: "/lebo-enterprise-edition/android" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/shugetsu/lebo-centre-docs" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    editLink: {
      pattern: "https://github.com/shugetsu/lebo-centre-docs/edit/master/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    lastUpdatedText: "最近更新时间",
  },
});
