module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  lastUpdated: true,
  themeConfig: {
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: '关于',
        link: 'https://github.com/lvfangren/Gun'
      }
    ],
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getGuideSidebar(),
      '/': getGuideSidebar()
    },
    
    algolia: {

    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: '测试下', link: '/' },
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Theming', link: '/guide/theming' },
        { text: 'API Reference', link: '/guide/api' },
        {
          text: 'Differences from Vuepress',
          link: '/guide/api'
        }
      ]
    }
  ]
}