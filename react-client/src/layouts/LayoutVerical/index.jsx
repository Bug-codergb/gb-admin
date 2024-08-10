import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useOutlet, useNavigation, useFetchers } from "react-router-dom";
import { Layout } from "antd";

import NProgress from "@/config/nprogress";
import ProMenu from "../components/Menu/index";
import ProHeader from "../components/Header/index";
import Logo from "../components/Logo/index";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  height: 60,
  backgroundColor: "#fff",
  borderBottom: "1px solid #e5e7ec",
  padding: 0,
  lineHeight: 1,
  display: "flex",
  alignItems: "center",
  padding: "0 10px"
};

const contentStyle = {
  backgroundColor: "#f0f1f3",
  padding: "12px"
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
  const childrenRouter = useOutlet();

  const navigation = useNavigation();
  const fetchers = useFetchers();
  useEffect(() => {
    const fetchersIdle = fetchers.every(f => f.state === "idle");
    if (navigation.state === "idle" && fetchersIdle) {
      NProgress.done();
    } else {
      NProgress.start();
    }
  }, [navigation.state, fetchers]);

  const isCollapse = useSelector(state => state.global.isCollapse);
  return (
    <Layout style={layoutStyle}>
      <Sider width="210px" style={siderStyle} trigger={null} collapsible collapsed={isCollapse}>
        <Logo />
        <ProMenu />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <ProHeader />
        </Header>
        <Content style={contentStyle}>{childrenRouter}</Content>
        <Footer style={footerStyle}>guobin 2025-08-10</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutVerical;
