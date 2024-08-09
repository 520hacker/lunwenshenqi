# 基于nginx镜像作为基础
FROM nginx:alpine

# 设置环境变量
ENV proxy_url "http://43.156.116.90:7001"
ENV proxy_key "Bearer sk-TwoApi3f6D8e2C0f62446C41821B10d3FB4FF5"
ENV editor_url "http://43.156.116.90:7018" 

# 删除nginx默认配置
RUN rm /etc/nginx/conf.d/default.conf

# 将自定义配置文件复制到容器中
COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 复制构建后的项目文件到容器中
COPY dist/ .

# 启动脚本，用于替换环境变量
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# 暴露容器端口
EXPOSE 80

# 启动nginx服务
CMD ["/docker-entrypoint.sh"]