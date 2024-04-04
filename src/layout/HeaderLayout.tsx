import { MenuOutlined } from "@ant-design/icons";
import { IoIosNotifications } from "react-icons/io";
import user from "../assets/person.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Button } from "antd";
import { setCollapsed } from "../redux/features/layout/layoutSlice";
import { NavLink, useLocation } from "react-router-dom";
const HeaderLayout = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const collapsed = useAppSelector((state) => state.layout.collapsed);
  const role = "vendor";
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
        <h1 className="text-white text-20">
          {pathname
            .split(/[/ -]/)
            .map((part) => part.toUpperCase())
            .join(" ")}
        </h1>
      </div>
      <div className="flex items-center  gap-x-6">
        <IoIosNotifications className="text-white  text-32 cursor-pointer" />
        <NavLink to={`/${role}/profile`}>
          <img
            src={user}
            width={40}
            className="rounded-full object-cover"
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderLayout;
