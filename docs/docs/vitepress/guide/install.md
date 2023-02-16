# 指南

## 使用包管理器
您可以使用`npm` `pnpm` `yarn`,推荐使用`pnpm`


::: code-group

```sh [npm]
$ npm install @gz-ui/ui
```
```sh [yarn]
$ yarn install @gz-ui/ui
```

```sh [pnpm]
$ pnpm install @gz-ui/ui
```
:::


## 用法
在main里面引入
```ts
// main.ts
import { createApp } from 'vue'
import GzUi from '@gz-ui/ui'
import '@gz-ui/ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(GzUi)
app.mount('#app')
```
