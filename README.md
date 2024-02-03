# my-blog-pc

一个基于 Vue3 + Express 搭建的个人博客。

### 技术栈

前端：Vue3 + Vuex + Vue Router + marked + highlight.js 

后端：Express + mongoDB + docker



### 登录

* 登录采用 RSA 非对称加密方式，前端获取后台返回的加密密钥，前端将加密后的报文传输给后端，后端收到加密的报文用私钥进行解密。
* 前端：jsencrypt 加密
* 后台：Node-RSA 或者 crypto 解密及返回公钥。

###  组件化

* Tab切换
* 博客展示页
* 博客内容 markdown 展示
* 个人信息展示页

![](https://w-qh.oss-cn-shenzhen.aliyuncs.com/code1.png)

### 页面展示

* 登录页

  ![](https://w-qh.oss-cn-shenzhen.aliyuncs.com/login.png)

* 博客分页列表

  ![](https://w-qh.oss-cn-shenzhen.aliyuncs.com/home.png)

* 博客 markown 展示

  ![](https://w-qh.oss-cn-shenzhen.aliyuncs.com/blogmarkdown.png)



This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
