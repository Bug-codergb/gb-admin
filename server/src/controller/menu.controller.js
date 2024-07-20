const { createService, getAllMenuService } = require("../service/menu.router");
const { buildTree } = require("../utils/index");
class MenuController {
  async create(ctx, next) {
    console.log(ctx.request.body);
    const { parentId, path, component, name, icon, meta } = ctx.request.body;
    console.log(path);
    const result = await createService(
      parentId,
      path,
      component,
      name,
      icon,
      meta
    );
    ctx.body = {
      status: 200,
      data: result,
    };
  }
  async getAllMenu(ctx, next) {
    const result = [
      {
        id: 1,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 2,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 3,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 4,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 5,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 6,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 7,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 8,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 9,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        id: 10,
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
      {
        name: "张三",
        school: "北京大学",
        gender: 1,
        address: "北京朝阳",
        age: 15,
      },
    ]; /*await getAllMenuService();*/
    // buildTree(result);
    result.forEach((item, index) => {
      const name = result[index].name;
      result[index].name = `${name}-${index}`;
      result[index].id = index;
    });
    ctx.body = {
      code: 200,
      rows: result.slice(0, 10),
      total: result.length,
      msg:"登录超时"
    };
  }
}
module.exports = new MenuController();
