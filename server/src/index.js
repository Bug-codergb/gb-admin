const Koa = require("koa");
const path = require("path");
const static = require("koa-static");
const koaBodyparser = require("koa-bodyparser");
const database = require("./app/databse.js");
const menuRouter = require("./router/menu.router.js");
const app = new Koa();
app.use(koaBodyparser());
app.use(menuRouter.routes());
app.use(menuRouter.allowedMethods());
app.use(static(path.resolve(process.cwd(), "./static")));
app.listen(8888, () => {
  console.log("服务启动!");
});
