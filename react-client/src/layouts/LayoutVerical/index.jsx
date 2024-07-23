import React from "react";
import { Layout } from "antd";
import ProMenu from "../components/Menu/index";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  height: 60,
  backgroundColor: "#fff",
  borderBottom: "1px solid #e5e7ec"
};

const contentStyle = {
  backgroundColor: "#ffffff",
  padding: "16px"
};

const siderStyle = {
  borderRight: "1px solid #e5e7ec",
  backgroundColor: "#ffffff",
  height: "100%"
};

const footerStyle = {
  height: "40px",
  padding: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: "1px solid #e5e7ec",
  backgroundColor: "#fff"
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  height: "100%"
};
const LayoutVerical = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="210px" style={siderStyle}>
        <ProMenu />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutVerical;
