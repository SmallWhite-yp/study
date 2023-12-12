import { defineConfig } from "vuepress/config";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineConfig({
  title: "lep",
  description: "学习",
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [
    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "GTM-WVS9HM6W", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "代码已复制",
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",

    // GitHub 仓库位置
    repo: "SmallWhite-yp/study",
    docsBranch: "master",

    // 编辑链接
    // editLinks: true,
    // editLinkText: "完善页面",

    // @ts-ignore
    // 底部版权信息
    // footer
  },
});
