---
title: 部署 Github Pages🔥
date: 2023-02-22
categories:
  - 前端
tags:
  - Github
sticky: 3
---

首先在 Github 上新建一个仓库，取名为 blogs。本地项目 git 初始化。
在 config.js 添加一个 base 路径配置
```
module.exports = {
  // 和仓库名相同
  base: '/blogs/',
}
```

在项目根目录下创建一个脚本文件 deploy.sh，注意修改一下对应的用户名和仓库名，相关代码如下：
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:XXX/XXX.git master:gh-pages

cd -
```

新建一个  Git Bash 终端，执行 sh deploy.sh

项目就会开始构建，然后上传到远程仓库上。最终我们可以在仓库的 Settings -> Pages 中看到最后的地址。