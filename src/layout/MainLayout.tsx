import { ConfigProvider, Layout } from "antd";

import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderLayout from "./HeaderLayout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { sidebardThemes } from "../themes/sidebarThemes";
import { paginationTheme } from "../themes/paginationThemes";
import { useEffect } from "react";
import { socket } from "../socket";
import { TUser, useCurrentUser } from "../redux/features/auth/authSlice";

import { setNotification } from "../redux/features/notification/notificationSlice";

const MainLayout = () => {
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const dispatch = useAppDispatch();
  const user: TUser | null = useAppSelector(useCurrentUser);
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on(user?.userId as string, (data) => {
      dispatch(setNotification(data));
    });

    return () => {
      socket.disconnect();
      socket.removeAllListeners();
    };
  }, [user, dispatch]);
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
