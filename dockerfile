# 基于nginx镜像作为基础
FROM nginx:alpine

# 设置环境变量
ENV proxy_url http://127.0.0.1:7001

# 删除nginx默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 将自定义配置文件复制到容器中
COPY nginx.conf /etc/nginx/conf.d/

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 复制构建后的项目文件到容器中
COPY dist/ .

# 暴露容器端口
EXPOSE 80

# 启动nginx服务
CMD ["nginx", "-g", "daemon off;"]