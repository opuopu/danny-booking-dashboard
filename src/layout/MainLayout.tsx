import { ConfigProvider, Layout } from "antd";

import { Content, Header } from "antd/es/layout/layout";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TUser, useCurrentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { paginationTheme } from "../themes/paginationThemes";
import { sidebardThemes } from "../themes/sidebarThemes";
import HeaderLayout from "./HeaderLayout";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const User: TUser = useAppSelector(useCurrentUser)!;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${User!.role}/dashboard`);
  }, []);
  return (
    <div>
      <ConfigProvider theme={sidebardThemes}>
        <Layout style={{ minHeight: "100vh", backgroundColor: "#edf5ea" }}>
          <Sidebar />
          <Layout>
            <Header className="sticky top-0 z-10 w-full bg-primary ">
              <HeaderLayout />
            </Header>
            <ConfigProvider theme={paginationTheme}>
              <Content
                style={{
                  padding: "24px 16px 0",
                  backgroundColor: "#edf5ea",
                  paddingLeft: collapsed ? "110px" : "215px",
                }}
                className={`responsive-content ${
                  !collapsed ? "collapsed" : ""
                }`}
              >
                <div
                  style={{
                    padding: 24,
                    height: "100%",
                    backgroundColor: "#edf5ea",
                  }}
                >
                  <Outlet />
                </div>
              </Content>
            </ConfigProvider>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default MainLayout;
