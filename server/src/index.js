const Koa = require("koa");
const koaBodyparser = require('koa-bodyparser');
const database = require("./app/databse.js");
const menuRouter = require("./router/menu.router.js");
const app = new Koa();
app.use(koaBodyparser());
app.use(menuRouter.routes());
app.use(menuRouter.allowedMethods())
app.listen(8888, () => {
  console.log("服务启动")
})
