import http from "../index";
export function getUserListApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        total: 12,
        rows: [
          { userId: "1001", userName: "郭斌", age: 12, dept: "研发", password: "123", gender: 0, address: "内蒙古" },
          { userId: "1002", userName: "李娜", age: 22, dept: "金融", password: "1123", gender: 1, address: "哈尔滨" },
          { userId: "1003", userName: "秀智", age: 32, dept: "测试", password: "1123", gender: 0, address: "吉林" },
          { userId: "1004", userName: "一鸣", age: 42, dept: "策划", password: "1223", gender: 0, address: "江苏" },
          { userId: "1005", userName: "李飞", age: 52, dept: "销售", password: "4123", gender: 0, address: "杭州" },
          { userId: "1006", userName: "婉儿", age: 62, dept: "土木", password: "5123", gender: 1, address: "深圳" },
          { userId: "1007", userName: "文君", age: 72, dept: "主播", password: "6123", gender: 1, address: "广州" },
          { userId: "1008", userName: "相如", age: 11, dept: "工匠", password: "7123", gender: 0, address: "珠海" },
          { userId: "1009", userName: "晓婷", age: 23, dept: "总监", password: "8123", gender: 0, address: "郑州" },
          { userId: "1010", userName: "晓霞", age: 45, dept: "演员", password: "9123", gender: 1, address: "天津" },
          { userId: "1011", userName: "倩倩", age: 32, dept: "导演", password: "1023", gender: 1, address: "南京" },
          { userId: "1012", userName: "完全", age: 12, dept: "工程师", password: "1123", gender: 1, address: "武汉" }
        ]
      });
    }, 200);
  });
}
