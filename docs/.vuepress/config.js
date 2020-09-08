const nav = require('./nav.js')

module.exports = {
  //base:"./",
  title: 'we',
  description: 'Just playing around',
  port: 8082,
  head: [
    ['link', { rel: 'icon', href: 'alien.ico' }],
  ],
  themeConfig: {
    nav: nav,
    sidebar: {
      '/vue/': [
        {
          title: 'vue',
          collapsable: false,
        },
        ['', 'vue']
      ],
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
        },
        ['', '算法题一'],
        ['numtype', '基础数据类型'],
      ],
      '/css/': [
        {
          title: 'css',
          collapsable: false,
        },
        ['', 'css'],   //第一个元素为默认路径，第二个元素为设置的别名
      ],

    },
    sidebarDepth: 23



  },





}