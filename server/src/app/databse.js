const mysql=require('mysql2');
const connection=mysql.createPool({
  host:'localhost',
  database:'gb-admin',
  user:'root',
  port:3306,
  password:'guobin250520',
})
connection.getConnection((err,conn)=>{
  if(conn){
    conn.connect((err,connect)=>{
      if(err) {
        console.log("数据库连接失败")
      }
      else{
        console.log("数据库连接成功");
      }
    })
  }else{
    console.log("数据库连接失败")
  }
})
let c = connection.promise();
module.exports=c;
