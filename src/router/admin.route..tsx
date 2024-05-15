import {
  MdDashboard,
  MdManageHistory,
  MdOutlineTableRestaurant,
} from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import Setting from "../pages/Setting";
import Notification from "../pages/Notification";
import ChangePasswordFrom from "../pages/ChangePasswordForm";

import Otp from "../pages/Otp";
import UpdatePassword from "../pages/UpdatePassword";
import VendorDashboard from "../pages/VendorDashboard";
import Table from "../pages/VendorDashboard/Table";
import Profile from "../pages/Profile";
import { BsBorderStyle, BsPeople } from "react-icons/bs";
import Booking from "../pages/VendorDashboard/Booking";
import SubAdmin from "../pages/VendorDashboard/SubAdmin";
import { RiRestaurant2Fill } from "react-icons/ri";
import Branch from "../pages/VendorDashboard/Branch";

export const vendorRoute = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
    element: <VendorDashboard />,
  },
  {
    name: "Branch",
    path: "branch",
    icon: <RiRestaurant2Fill />,
    element: <Branch />,
  },
  {
    name: "SubAdmin",
    path: "subadmin",
    icon: <BsPeople />,
    element: <SubAdmin />,
  },
  {
    name: "Table",
    path: "table",
    icon: <MdOutlineTableRestaurant />,
    element: <Table />,
  },
  {
    name: "Booking",
    path: "booking",
    icon: <BsBorderStyle />,
    element: <Booking />,
  },
  {
    name: "Control Panel",
    path: "control",
    icon: <MdManageHistory />,

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
