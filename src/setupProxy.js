const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/token/",
    createProxyMiddleware({
      target: "http://erp.apptrix.ru",
      changeOrigin: true,
    })
  );
};

module.exports = function (app) {
  app.use(
    "/api/token/refresh/",
    createProxyMiddleware({
      target: "http://erp.apptrix.ru",
      changeOrigin: true,
    })
  );
};

const users = {
  target: "https://demo-apptrix.myjetbrains.com",
  changeOrigin: true,
};

const tasks = {
  target: "https://demo-apptrix.myjetbrains.com",
  changeOrigin: true,
};

module.exports = function (app) {
  app.use("/youtrack/api/issues", createProxyMiddleware(tasks));

  app.use("/youtrack/api/users", createProxyMiddleware(users));
};
