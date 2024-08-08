const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true, 
  devServer: {
    proxy: {
      '/api/twoapi/': {
        target: 'http://localhost:5000',
        // target: process.env.BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/twoapi': ''
        }
      },
      '/api/public/': {
        target: 'http://localhost:5000',
        // target: process.env.BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/public': ''
        }
      },
    }
  }
}) 