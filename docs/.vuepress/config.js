module.exports = {
    locales: {
      '/':{
        lang:'zh-cn' 
      }
    },
    title: 'Anthony - GitBook',
    description: 'Anthony GitBook',
    base: '/gitbook/',
    repo: 'https://github.com/thonyl19/gitbook',
    themeConfig: {
      sidebarDepth: 0,
      head:[],
      sidebar: [
        ['/', '前言']
      ],
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Github', link: '/' }
        ]
      }
    }
 
  }