import { UserOutlined } from "@ant-design/icons";
import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import ChangePasswordFrom from "../pages/ChangePasswordForm";
import Notification from "../pages/Notification";
import Setting from "../pages/Setting";

import Otp from "../pages/Otp";
import Profile from "../pages/Profile";
import UpdatePassword from "../pages/UpdatePassword";
import VendorDashboard from "../pages/VendorDashboard";
import Booking from "../pages/VendorDashboard/Booking";
import Branch from "../pages/VendorDashboard/Branch";
import SubAdmin from "../pages/VendorDashboard/SubAdmin";
import Table from "../pages/VendorDashboard/Table";

export const vendorRoute = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
    element: <VendorDashboard />,
  },
  {
    name: "Sub Admin",
    path: "sub_admin",
    icon: <UserOutlined />,
    element: <SubAdmin />,
  },
  {
    name: "Branch",
    path: "branch",
    icon: <MdDashboard />,
    element: <Branch />,
  },
  {
    name: "Table",
    path: "table",
    icon: <MdDashboard />,
    element: <Table />,
  },
  {
    name: "Booking",
    path: "booking",
    icon: <TbBrandBooking />,
    element: <Booking />,
  },

  // {
  //   name: "Control Panel",
  //   path: "control",
  //   icon: <MdManageHistory />,

  //   element: <Booking />,
  // },

  {
    name: "Setting",
    path: "setting",
    icon: <CiSettings />,
    element: <Setting />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "notification",
    element: <Notification />,
  },
  {
    path: "change-password",
    element: <ChangePasswordFrom />,
  },
  {
    path: "otp",
    element: <Otp />,
  },
  {
    path: "update-password",
    element: <UpdatePassword />,
  },
];
