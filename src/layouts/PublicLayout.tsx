import React, { useState, useContext } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  EuroCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const { Header, Sider, Content } = Layout;

interface Props {
  children?: React.ReactNode;
}

export const PublicLayout = ({
  children,
  ...restProps
}: Props): JSX.Element => {
  const { setAuth }: any = useAuth();
  const logout = async () => {
    setAuth({});
    navigate("/LoginPage");
  };
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              logout();
            } else {
              navigate(key);
            }
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "Dashboard",
            },
            {
              key: "/UserManagement",
              icon: <UsergroupAddOutlined />,
              label: "UserManagement",
            },
            {
              key: "/Transactions",
              icon: <EuroCircleOutlined />,
              label: "Transactions",
            },
            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, margin: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            height: "100%",
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default PublicLayout;
