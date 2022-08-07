import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import styles from "./BasicLayout.module.scss";

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

const BasicLayout: React.FC<any> = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        width="256"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={styles.logo}>{collapsed ? "导航" : "前端导航"}</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          {props.data.map((e: any) => {
            if (e.children) {
              return (
                <SubMenu
                  key={e.title}
                  title={
                    <span>
                      <AppstoreOutlined />
                      <span>{e.title}</span>
                    </span>
                  }
                >
                  {e.children.map((e1: any) => {
                    return (
                      <Menu.Item key={e1.title}>
                        <a
                          href={`#${e1.title}`}
                          style={{ color: "rgba(255, 255, 255, 0.65)" }}
                        >
                          <UserOutlined />
                          <span>{e1.title}</span>
                        </a>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={e.title}>
                <a
                  href={`#${e.title}`}
                  style={{ color: "rgba(255, 255, 255, 0.65)" }}
                >
                  <UserOutlined />
                  <span>{e.title}</span>
                </a>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header} style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: styles.trigger,
              onClick: toggle,
            }
          )}
        </Header>
        <div style={{ overflowY: "auto" }}>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2019 Created by&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.maxmeng.top/"
            >
              MaxMeng
            </a>
          </Footer>
        </div>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
