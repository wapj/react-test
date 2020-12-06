import "./App.css";
import logo from "./assets/logo.png";

import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";

import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  function onCollapsed(collapsed: boolean) {
    setCollapsed(collapsed);
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <div className="logo" style={{ width: 120 }}>
          <img src={logo} width="120" alt="카카오페이지 로고" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">메뉴1</Menu.Item>
          <Menu.Item key="2">메뉴2</Menu.Item>
          <Menu.Item key="3">메뉴3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapsed}
        >
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<NotificationOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
