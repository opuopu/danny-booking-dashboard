import { CiSettings } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import ChangePasswordFrom from "../pages/ChangePasswordForm";
import Notification from "../pages/Notification";
import Setting from "../pages/Setting";

import Otp from "../pages/Otp";
import Profile from "../pages/Profile";
import SubAdminDashboard from "../pages/SubAdminDashboard";
import Booking from "../pages/SubAdminDashboard/Booking";
import UpdatePassword from "../pages/UpdatePassword";

export const subAdminRoute = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
    element: <SubAdminDashboard />,
  },
  // {
  //   name: "Table",
  //   path: "table",
  //   icon: <MdDashboard />,
  //   element: <Table />,
  // },

  {
    name: "Booking",
    path: "booking",
    icon: <TbBrandBooking />,
    element: <Booking />,
  },

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
