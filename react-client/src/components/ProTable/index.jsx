import React, { memo } from "react";
import { Table } from "antd";
import { Input, Pagination, Button } from "antd";
import * as styles from "./style.module.scss";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    with: 300,
    fixed: "left"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    with: 300
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    with: 400
  },
  {
    title: "姓名1",
    dataIndex: "name11",
    key: "name11",
    with: 400
  },
  {
    title: "年龄12",
    dataIndex: "age22",
    key: "age22",
    with: 200
  },
  {
    title: "住址13",
    dataIndex: "address13",
    key: "address13",
    with: 200
  },

  {
    title: "年龄123",
    dataIndex: "age322",
    key: "age223"
  },
  {
    title: "年龄1231",
    dataIndex: "age3222",
    key: "age2233",
    with: 200
  },
  {
    title: "年龄11231",
    dataIndex: "age32222",
    key: "age22233",
    with: 200
  },
  {
    title: "年2龄1231",
    dataIndex: "ag2e3222",
    key: "age22233111",
    with: 500
  },
  {
    title: "年2龄dd1231",
    dataIndex: "ag2edd3222",
    key: "age22ddd233",
    with: 200
  },
  {
    title: "住址2131113",
    dataIndex: "address133",
    key: "address133",
    fixed: "right",
    with: 100
  }
];
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
    address133: "Dwdwdwf"
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "3",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "4",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "5",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "6",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "7",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "8",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "9",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "10",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  }
];
const ProTable = () => {
  return (
    <div className={["table-main"]}>
      <div className={styles["table-header"]}>
        <div className="lf">
          <Input placeholder="Basic usage" />
        </div>
        <div className="rt">
          <Button type="primary">确定</Button>
        </div>
      </div>
      <div className="el-table">
        <Table
          dataSource={dataSource}
          rowKey="key"
          scroll={{ y: 100, x: 400 }}
          bordered={false}
          size={"middle"}
          columns={columns}
          pagination={false}
          tableLayout="fixed"
        />
      </div>
      <div className={styles["page-container"]}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};
export default memo(ProTable);
