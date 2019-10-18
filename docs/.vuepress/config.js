let themeConfig_ououe = {
    showThemeButton: false,
    // cover: '/cover.jpg',
    // logo: '/logo.png',
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
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
}

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
    repo: 'https://github.com/thonyl19/gitbook',
    theme: 'ououe',
    themeConfig: themeConfig_ououe,
    plugins: ['@vuepress/pwa',{
      serviceWorker: true,
      updatePopup: true
    }],
  }