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
        text: 'Button 按钮', link: '/vitepress/components/button'
      },
      {
        text: 'CheckBox 多选框', link: '/vitepress/components/checkBox'
      },
      {
        text: 'Input 输入框', link: '/vitepress/components/input'
      },
      {
        text: 'Tag 标签', link: '/vitepress/components/tag'
      }
      ,
      {
        text: 'Select 选择器', link: '/vitepress/components/select'
      }
      ,
      {
        text: 'tabs', link: '/vitepress/components/tabs'
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
