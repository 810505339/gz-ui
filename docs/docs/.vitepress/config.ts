import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,
  appearance: 'dark',
  themeConfig: {
    siteTitle: 'gz-ui',
    nav: [
      { text: '指南', link: '/vitepress/guide/install' },
      { text: '组件', link: '/vitepress/components/button' },

    ],
    logo: '/dogs.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/810505339/gz-ui' }
    ],
    sidebar: {
      '/vitepress/guide/': [
        {
          text: '指南',
          link: '/vitepress/guide/install'
        },
      ],
      '/vitepress/components/': [

        {
          text: 'Form 表单组件',
          items: [
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
              text: 'tabs 标签页', link: '/vitepress/components/tabs'
            },
            {
              text: 'Badge 徽章', link: '/vitepress/components/badge'
            },
            {
              text: 'Switch 开关', link: '/vitepress/components/switch'
            }
          ],
          collapsed: true
        },
        {
          text: 'Feedback 反馈组件',
          collapsed: true,
          items: [
            {
              text: 'Alert提示',
              link: '/vitepress/components/alter'
            },
            {
              text: 'Message消息提示',
              link: '/vitepress/components/message'
            },
            {
              text: 'Dialog对话框',
              link: '/vitepress/components/dialog'
            }
          ]

        },

      ]

    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/dogs.png' }],
  ],
  description: 'A Vue.js UI library.',
  markdown: {

  }
})
