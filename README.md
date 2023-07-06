# 滴石

todo list, 取水滴石穿之意

## 体验

### LocalStorage

1. 基于 LocalStorage 开发的 todo-list
2. 地址：[https://insistime.com/dishi-ls](https://insistime.com/dishi-ls)
3. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/localstorage](https://github.com/uikoo9/dishi-monorepo/tree/localstorage)

### IndexedDB

1. 基于 IndexedDB 开发的 todo-list
2. 地址：[https://insistime.com/dishi-indexeddb](https://insistime.com/dishi-indexeddb)
3. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/indexeddb](https://github.com/uikoo9/dishi-monorepo/tree/indexeddb)

### SQLite

1. 基于 Electron 和 SQLite 开发的 todo-list
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/es6-rollup](https://github.com/uikoo9/dishi-monorepo/tree/es6-rollup)
3. Mac(Intel)：[https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-x64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-x64.dmg)
4. Mac(M1)：[https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-arm64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-arm64.dmg)

## 版本

### 0.0.8.20230706

1. 将主进程代码改为 es6+rollup
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/es6-rollup](https://github.com/uikoo9/dishi-monorepo/tree/es6-rollup)
3. 相关文章：
   1. [Electron-开发实践：包体积精简](https://blog.insistime.com/electron-es6)
4. 相关产物：
   1. Mac(Intel)：[https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-x64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-x64.dmg)
   2. Mac(M1)：[https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-arm64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-arm64.dmg)

### 0.0.7.20230704

1. 对 mac dmg 文件进行了定制
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/custom-dmg](https://github.com/uikoo9/dishi-monorepo/tree/custom-dmg)
3. 相关文章：
   1. [Electron-开发实践：DMG 安装包定制](https://blog.insistime.com/electron-dmg)
4. 相关产物：
   1. Mac(Intel)：[https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-x64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-x64.dmg)
   2. Mac(M1)：[https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-arm64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.1.6-arm64.dmg)

### 0.0.6.20230703

1. 对 mac 应用进行签名和公证
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/mac-sign](https://github.com/uikoo9/dishi-monorepo/tree/mac-sign)
3. 相关文章：
   1. [Electron-开发实践：Mac 打包](https://blog.insistime.com/electron-mac)
   2. [Electron-开发实践：制作 icns 图标](https://blog.insistime.com/electron-icns)
   3. [Electron-开发实践：注册苹果开发者账号](https://blog.insistime.com/electron-apple)
   4. [Electron-开发实践：Mac 应用包签名和公证](https://blog.insistime.com/electron-mac-sign)
4. 相关技术：
   1. [electron-icns](https://code.insistime.com/electron-icns#/)
   2. [qiao-electron-cli](https://code.insistime.com/qiao-electron-cli#/)
   3. [electron-packager](https://github.com/electron/electron-packager)
   4. [@electron/osx-sign](https://github.com/electron/osx-sign)
   5. [@electron/notarize](https://github.com/electron/notarize)
5. 相关产物：
   1. Mac(Intel)：[https://static.insistime.com/21_dishi/dmg/dishi-2.0.9-x64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.0.9-x64.dmg)
   2. Mac(M1)：[https://static.insistime.com/21_dishi/dmg/dishi-2.0.9-arm64.dmg](https://static.insistime.com/21_dishi/dmg/dishi-2.0.9-arm64.dmg)

### 0.0.5.20230621

1. 使用 monorepo 管理项目
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/electron-monorepo](https://github.com/uikoo9/dishi-monorepo/tree/electron-monorepo)
3. 相关文章：
   1. [Electron-开发实践：使用 Monorepo 管理 Electron 项目](https://blog.insistime.com/electron-monorepo)
   2. [初始化前端 Monorepos 项目](https://blog.insistime.com/init-monorepos)
   3. [前端 Monorepos 项目使用 npm-workspaces](https://blog.insistime.com/npm-workspaces)
   4. [规范的代码提交：Conventional Commits](https://blog.insistime.com/conventional-commits)
   5. [强大的构建系统：NX](https://blog.insistime.com/nx)
   6. [Nx-VS-Lerna](https://blog.insistime.com/nx-vs-lerna)
   7. [小巧的 JS 测试框架：AVA](https://blog.insistime.com/ava)
4. 相关技术：
   1. [electron-icns](https://code.insistime.com/electron-icns#/)
   2. [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)
   3. [commitizen](https://www.npmjs.com/package/commitizen)
   4. [commitlint](https://github.com/conventional-changelog/commitlint)
   5. [husky](https://typicode.github.io/husky/#/)
   6. [lint-staged](https://www.npmjs.com/package/lint-staged)
   7. [nx](https://nx.dev/)
   8. [rollup](https://rollupjs.org/)
   9. [ava](https://github.com/avajs/ava)
   10. [prettier](https://prettier.io/)
   11. [eslint](https://eslint.org/)
   12. [npm-workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)

### 0.0.4.20221024

1. 基于 [SQLite3](https://www.npmjs.com/package/sqlite3) 开发的 todo-list
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/sqlite](https://github.com/uikoo9/dishi-monorepo/tree/sqlite)
3. 相关文章：
   1. [Electron-开发实践：本地数据库 SQLite](https://blog.insistime.com/sqlite)
   2. [Electron 那些事 10：本地数据库 sqlite](https://uikoo9.blog.csdn.net/article/details/123924787)
4. 相关技术：
   1. [sqlite](https://www.sqlite.org/index.html)
   2. [sqlite3](https://www.npmjs.com/package/sqlite3)
   3. [qiao-sqlite](https://code.insistime.com/qiao-sqlite#/)

### 0.0.3.20221021

1. 基于[Electron](https://www.electronjs.org/zh/)开发的 todo-list
2. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/electron](https://github.com/uikoo9/dishi-monorepo/tree/electron)
3. 相关文章：
   1. [一篇文章学会 Electron](https://blog.insistime.com/electron)
   2. [Electron 专栏](https://blog.csdn.net/uikoo9/category_11468921.html)
4. 相关技术：
   1. [Electron](https://www.electronjs.org/zh/)
   2. [chromium](https://www.chromium.org/chromium-projects/)
   3. [nodejs](https://nodejs.org/dist/latest-v16.x/docs/api/)
   4. [electron-packager](https://github.com/electron/electron-packager)
   5. [qiao-electron](https://code.insistime.com/qiao-electron#/)
   6. [qiao-electron-cli](https://code.insistime.com/qiao-electron-cli#/)

### 0.0.2.20221014

1. 基于 [IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API) 开发的 todo-list
2. 地址：[https://insistime.com/dishi-indexeddb](https://insistime.com/dishi-indexeddb)
3. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/indexeddb](https://github.com/uikoo9/dishi-monorepo/tree/indexeddb)
4. 相关文章：
   1. [一篇文章学会 IndexedDB](https://blog.insistime.com/indexeddb)
5. 相关技术：
   1. [qiao.db.js](https://code.insistime.com/qiao.db.js#/)

### 0.0.1.20221014

1. 基于 [LocalStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 开发的 todo-list
2. 地址：[https://insistime.com/dishi-ls](https://insistime.com/dishi-ls)
3. 分支：[https://github.com/uikoo9/dishi-monorepo/tree/localstorage](https://github.com/uikoo9/dishi-monorepo/tree/localstorage)
4. 相关文章
   1. [一篇文章学会 LocalStorage](https://blog.insistime.com/localstorage)
   2. [一篇文章开发 todolist](https://blog.insistime.com/dishi-ls)
   3. [一篇文章学会 Webpack5.x](https://blog.insistime.com/webpack)
   4. [一篇文章开发 Node.js-WebServer](https://blog.insistime.com/nodejs-web-server)
   5. [一文学会用 Lerna 管理多个 npm 包](https://blog.csdn.net/uikoo9/article/details/124190634)
   6. [一篇文章学会 pm2](https://blog.csdn.net/uikoo9/article/details/79018750)
   7. [centos 随笔 04：acme.sh 申请 https 证书](https://uikoo9.blog.csdn.net/article/details/125180450)
5. 相关技术
   1. [react](https://react.dev/)
   2. [webpack](https://webpack.js.org/)
   3. [lerna](https://lerna.js.org/)
   4. [pm2](https://pm2.keymetrics.io/)
   5. [acme.sh](https://github.com/acmesh-official/acme.sh)
   6. [qiao-z](https://code.insistime.com/qiao-z#/)
   7. [qiao-cos](https://code.insistime.com/qiao-cos#/)
   8. [qiao-webpack](https://code.insistime.com/qiao-webpack#/)
   9. [qiao.ls.js](https://code.insistime.com/qiao.ls.js#/)
