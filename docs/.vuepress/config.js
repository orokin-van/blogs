module.exports = {
  title: 'orokin-van',
  description: '猫咪',
  theme: 'reco',
  base: '/blogs/',
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    type: "blog",
    author: "Van",
    logo: "/author.jpg",
    authorAvatar: "/author.jpg",
    nav: [{
        text: "首页",
        link: "/"
      },
    ],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客", // 默认文案 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认4
        text: "Tag", // 默认文案 “标签”
      },
    },
  }
}