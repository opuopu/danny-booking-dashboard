/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuOutlined } from "@ant-design/icons";
import { Badge, Button, Input } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { toast } from "sonner";
import notificationIcon from "../assets/notification.png";
import user from "../assets/person.png";
import { setCollapsed } from "../redux/features/layout/layoutSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
// import { TUser, useCurrentUser } from "../redux/features/auth/authSlice";
import { useEffect } from "react";
import { useProfileQuery } from "../redux/features/auth/authApi";
import { TUser, useCurrentUser } from "../redux/features/auth/authSlice";
import { setBookingSearch } from "../redux/features/booking/bookingSlice";
import showImage from "../utils/showImage";

const HeaderLayout = () => {
  const dispatch = useAppDispatch();
  const { data: pData } = useProfileQuery(undefined);
  const User: TUser | null = useAppSelector(useCurrentUser);
  const notification: any = useAppSelector(
    (state) => state.notification.notification
  );
  useEffect(() => {
    toast.info(notification);
  }, [notification]);
  const { pathname } = useLocation();

  const onSearch = async (val: string) => {
    dispatch(setBookingSearch(val));
  };
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  return (
    <div className="flex justify-between">
      <div
        className="flex items-center"
        style={{
          marginLeft: collapsed ? "100px" : "200px",
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => dispatch(setCollapsed())}
          style={{
            fontSize: "16px",
            width: 45,
            height: 45,
            marginRight: "10px",
          }}
        />

        <h1 className="text-white text-20">Dashboard</h1>
      </div>
      <div className="flex items-center  gap-x-6">
        {pathname === "/super_admin/booking" ||
          (pathname === "/sub_admin/booking" && (
            <Input.Search
              onSearch={onSearch}
              placeholder="customer email | name | booking ID"
              className="w-[400px]"
              size="large"
              allowClear
            />
          ))}
        <Badge color="red">
          <NavLink to={`/${User?.role}/notification`}>
            <img src={notificationIcon} alt="" width={30} />
          </NavLink>
        </Badge>

        <NavLink to={`/${User?.role}/profile`}>
          <img
            src={showImage(pData?.data?.image) || user}
            width={40}
            className=" object-cover rounded-full"
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderLayout;
