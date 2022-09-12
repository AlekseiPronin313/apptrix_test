const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/token/',
    createProxyMiddleware({
      target: 'http://erp.apptrix.ru',
      changeOrigin: true,
    })
  );
};

module.exports = function(app) {
  app.use(
    '/api/token/refresh/',
    createProxyMiddleware({
      target: 'http://erp.apptrix.ru',
      changeOrigin: true,
    })
  );
};

module.exports = function(app) {
  app.use(
    '/youtrack/api/users',
    createProxyMiddleware({
      target: 'https://demo-apptrix.myjetbrains.com',
      changeOrigin: true,
    })
  );
};