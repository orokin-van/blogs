---
title: é¨ç½² Github Pagesð¥
date: 2023-02-22
categories:
  - åç«¯
tags:
  - Github
sticky: 3
---

é¦åå¨ Github ä¸æ°å»ºä¸ä¸ªä»åºï¼ååä¸º blogsãæ¬å°é¡¹ç® git åå§åã
å¨ config.js æ·»å ä¸ä¸ª base è·¯å¾éç½®
```
module.exports = {
  // åä»åºåç¸å
  base: '/blogs/',
}
```

å¨é¡¹ç®æ ¹ç®å½ä¸åå»ºä¸ä¸ªèæ¬æä»¶ deploy.shï¼æ³¨æä¿®æ¹ä¸ä¸å¯¹åºçç¨æ·ååä»åºåï¼ç¸å³ä»£ç å¦ä¸ï¼
```
#!/usr/bin/env sh

# ç¡®ä¿èæ¬æåºéå°çéè¯¯
set -e

# çæéææä»¶
npm run docs:build

# è¿å¥çæçæä»¶å¤¹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# å¦æåå¸å° https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:XXX/XXX.git master:gh-pages

cd -
```

æ°å»ºä¸ä¸ª  Git Bash ç»ç«¯ï¼æ§è¡ sh deploy.sh

é¡¹ç®å°±ä¼å¼å§æå»ºï¼ç¶åä¸ä¼ å°è¿ç¨ä»åºä¸ãæç»æä»¬å¯ä»¥å¨ä»åºç Settings -> Pages ä¸­çå°æåçå°åã