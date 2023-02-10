import { defineConfig } from 'vitepress'

export default defineConfig({

  themeConfig: {
    siteTitle: 'gz-ui',
    nav: [
      { text: '组件', link: '/vitepress/components/button' },
    ],
    logo: '/dogs.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/810505339/gz-ui' }
    ],
    sidebar: [
        {
          text:'Button 按钮',link:'/vitepress/components/button'
        },
        {
          text:'checkBox 多选框',link:'/vitepress/components/checkBox'
        },
        {
          text:'input 输入框',link:'/vitepress/components/input'
        }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/dogs.png' }],
  ],
  description: 'A Vue.js UI library.',
  markdown: {

  }
})
