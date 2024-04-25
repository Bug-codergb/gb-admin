const KoaRouter = require("koa-router");
const menuRouter = new KoaRouter({prefix:'/menu'});
const {
  create,
  getAllMenu
} = require("../controller/menu.controller.js")
menuRouter.post('/create', create);
menuRouter.get("/all", getAllMenu);
module.exports = menuRouter;