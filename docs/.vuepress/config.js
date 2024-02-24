module.exports = {
  title: '微脉科技',
  host: '0.0.0.0',
  port: 8888,
  description: '微脉科技前端项目基本模板',
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  // 网站子目录 https://foo.github.io/api/
  base: '/api/',
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',


    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    // 页面滚动
    smoothScroll: false,
    // 最后更新时间, 添加的字符串默认会生成为前缀
    lastUpdated: '最后更新时间：',
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    logo: '/logo.png',
    // 是否显示所有页面的标题链接
    displayAllHeaders: true, // 默认值：falsel
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      // {text: '', link: 'https://google.com'},
    ],
    sidebar: {
      '/guide/': [
        ['', '前言'],
        ['codeSpecification', '代码规范'],
        ['components', '组件使用'],
      ],
      // 首页，需放在最后
      '/': ['']
    }
  },
  markdown: {
    // 显示行号
    lineNumbers: true
  }
}
