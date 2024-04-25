const connection = require("../app/databse");
class MenuService{
  async createService(parentId, path, component, name, icon, meta) {
    try {
      console.log(parentId)
      const id = new Date().getTime();
      const sql = `insert into menu(id,parentId, path, component, name, icon, meta) values(?,?,?,?,?,?,?)`;
      const result = await connection.execute(sql, [id, parentId, path, component, name, icon, meta])
      return result;
    } catch (e) {
      
    }
  }
  async getAllMenuService() {
    try {
      const sql = `select * from menu`;
      const result = await connection.execute(sql);
      return result[0]
    } catch (e) {
      
    }
  }
}
module.exports = new MenuService()