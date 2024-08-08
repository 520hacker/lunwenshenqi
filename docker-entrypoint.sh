#!/bin/sh
set -e

# 替换环境变量
envsubst '$proxy_url $proxy_key' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/nginx.conf

# 启动nginx服务
exec nginx -g 'daemon off;'
