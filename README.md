# lunwenshenqi - 论文神器
AI 结构化生成论文。



## 演示站点

https://lunwenshenqi.qiangtu.com/
https://github.com/520hacker/lunwenshenqi



# 详细文档暂时没有

## 本项目分拆来自，部署设置等均可以参考
https://github.com/520hacker/two-api/tree/main/vue-sample



# 注意：

- 默认 token 保存在 src/token.js ，默认key额度不定期刷新，独立部署请自行修改为你的私有key
- 默认请求地址为当前域名，请自行做好 /v1 到 {AI Host}/v1 的反向代理 
- 创建预览编辑器调用的是 suishouji 项目，如需此项功能，请添加 /api 到 https://suishouji.qiangtu.com/api 的反代， 参考根目录 nginx_suishouji.conf
- suishouji 也开源了 https://github.com/520hacker/markdown-AI-editor



# Docker 安装

### 参数

ports：  9001 为您指定对外的端口，80为容器内端口

proxy_url： 您的AI服务器地址

proxy_key： 您的AI服务器的Token Key

### 配置样本

```yaml
version: '3'
services:
  lunwenshenqi:
    image: odinluo/lunwenshenqi:latest
    ports:
      - 9001:80     
    environment: 
      - proxy_url "http://127.0.0.1:7001"
      - proxy_key "Bearer sk-TwoApiKey" 
```



## Docker Run

```bash
docker run -d -p 9001:80 \
  -e proxy_url="http://127.0.0.1:7001" \
  -e proxy_key="Bearer sk-TwoApiKey" \
  odinluo/lunwenshenqi:latest
```

