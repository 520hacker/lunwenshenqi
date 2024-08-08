
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  if (req.url.startsWith('/api/rss')) {
    target = `${process.env.RSS_API_HOST}/`;
  }

  if (req.url.startsWith('/api/key')) {
    target = `${process.env.SSJ_API_HOST}/`;
  }

  if (req.url.startsWith('/api/update')) {
    target = `${process.env.SSJ_API_HOST}/`;
  }

  if (req.url.startsWith('/api/memo')) {
    target = `${process.env.MEMOS_API_HOST}/`;
  }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api/rss': '/',
    },
  })(req, res)
}
