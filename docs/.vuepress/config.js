let themeConfig_ououe = {
    showThemeButton: false,
    cover: 'https://picsum.photos/id/830/1920/1080',
    //logo: "test",
    search: true,
    backgroundImage: false,
    pageGroup: 5,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [
      { text: "Anthony' GitBook", link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Doc', link: '/doc/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/thonyl19/gitbook' }
    ]
}

let themeConfig_ououe_head = [
  ['link', { rel: 'icon', href: 'favicon.ico' }],
  ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
  ['meta', { name: 'renderer', content: 'webkit' }],
  ['meta', { name: 'force-rendering', content: 'webkit' }],
  ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
  ['meta', { name: 'author', content: 'Anthony<a0982830615@gmail.com>' }],
  ['meta', { name: 'copyright', content: '網站內容版權所有，轉載請註明出處' }],
  //['meta', { name: "keywords", content: "m-less, less, mixins, 常用 mixins 文件, mixins 总结, mixins 整理, less 总结整理, less 技巧, css 简写, ououe, tolking, 前端技巧, 前端总结, 前端分享, ououe.com" }]
  
]


let themeConfig_old ={
      sidebarDepth: 0,
      head:[],
      sidebar: [
        ['/', '前言']
      ],
      themeConfig: {
        lastUpdated: true,
        serviceWorker: {
          updatePopup: true // Boolean | Object, 默认值是 undefined.
          // 如果设置为 true, 默认的文本配置将是: 
          // updatePopup: { 
          //    message: "New content is available.", 
          //    buttonText: "Refresh" 
          // }
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Github', link: '/' }
        ]
      }
    }

module.exports = {
    locales: {
      '/':{
        lang:'zh-cn' 
      }
    },
    title: '學得多不重要,記得住才是自己的',
    description: '記不住咋辦,只好乖乖的寫筆記囉',
    base: '/gitbook/',
    evergreen: true,
    repo: 'https://github.com/thonyl19/gitbook',
    theme: 'ououe',
    head:themeConfig_ououe_head,
    themeConfig: themeConfig_ououe,
    plugins: [['@vuepress/pwa',{
        updatePopup: {
          message: '發現新内容可用',
          buttonText: '刷新'
        }
      }],
      ['container', {
        type: 'right',
        defaultTitle: ''
      }],
      ['container', {
        type: 'tip',
        before: info => `<div class="tip"><p class="title">${info}</p>`,
        after: '</div>'
      }],
      ['container', {
        type: 'warning',
        before: info => `<div class="warning"><p class="title">${info}</p>`,
        after: '</div>'
      }],
      ['container', {
        type: 'danger',
        before: info => `<div class="danger"><p class="title">${info}</p>`,
        after: '</div>'
      }],
      //['@theme/Footer', false]
    ]
  }
