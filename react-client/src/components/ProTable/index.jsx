import React, { memo } from "react";
import { Table } from "antd";
import { Input, Pagination } from "antd";
import * as styles from "./style.module.scss";
const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    with: 200
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    with: 200
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
    with: 200
  },
  {
    title: "姓名1",
    dataIndex: "name11",
    key: "name11",
    with: 200
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
    key: "age223",
    with: 200
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
    key: "age22233",
    with: 200
  },
  {
    title: "住址2131113",
    dataIndex: "address133",
    key: "address133",
    fixed: "right"
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
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  },
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号"
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号"
  }
];
const ProTable = () => {
  return (
    <div className={["table-main"]}>
      <div className={styles["table-header"]}>
        <Input placeholder="Basic usage" />
      </div>
      <div className="el-table">
        <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ y: "auto" }} />
      </div>
      <div className={styles["page-container"]}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};
export default memo(ProTable);
