let themeConfig_ououe = {
    showThemeButton: false,
    cover: 'https://picsum.photos/id/830/1920/1080',
    //logo: 'https://picsum.photos/1920/1080/?random&date=2019-02-22',
    search: true,
    backgroundImage: false,
    pageGroup: 5,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [
      { text: 'Home', link: '/' },
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
  ['link', { rel: 'icon', href: '/gitbook/favicon.ico' }],
  ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
  ['meta', { name: 'renderer', content: 'webkit' }],
  ['meta', { name: 'force-rendering', content: 'webkit' }],
  ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
  ['meta', { name: 'author', content: 'Anthony<a0982830615@gmail.com>' }],
  ['meta', { name: 'copyright', content: '網站內容版權所有，轉載請註明出處' }],
  ['meta', { name: "keywords", content: "m-less, less, mixins, 常用 mixins 文件, mixins 总结, mixins 整理, less 总结整理, less 技巧, css 简写, ououe, 雨无声, tolking, 前端技巧, 前端总结, 前端分享, ououe.com" }]
  
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
  // '@vuepress/back-to-top': true,
  //   '@vuepress/medium-zoom': true,
  //   '@vuepress/pwa': {
  //            serviceWorker: true,
  //             popupComponent: 'MySWUpdatePopup',
  //             updatePopup: {
  //             message: "啦啦啦,一大波内容已更新!",
  //             buttonText: "朕知道了"
  //           }
  //         },

    locales: {
      '/':{
        lang:'zh-cn' 
      }
    },
    title: 'Anthony - GitBook',
    description: 'Anthony GitBook',
    base: '/gitbook/',
    //base: '/',
    //dest: 'dist/',
    evergreen: true,
    repo: 'https://github.com/thonyl19/gitbook',
    theme: 'ououe',
    head:themeConfig_ououe_head,
    themeConfig: themeConfig_ououe,
    plugins: ['@vuepress/pwa',{
      serviceWorker: true,
      updatePopup: true
    }],
  }
