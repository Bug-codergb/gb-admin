const { createService, getAllMenuService } = require("../service/menu.router");
const {buildTree } = require("../utils/index")
class MenuController{
  async create(ctx, next) {
    console.log(ctx.request.body)
    const {
      parentId,
      path,
      component,
      name,
      icon,
      meta,

    } = ctx.request.body;
    console.log(path)
    const result = await createService(parentId, path, component, name, icon, meta);
    ctx.body = {
      status: 200,
      data:result
    }
  }
  async getAllMenu(ctx,next) {
    const result = await getAllMenuService();
    buildTree(result);
    ctx.body = {
      status:200,
      data: result,
    }
  }
}
module.exports = new MenuController()