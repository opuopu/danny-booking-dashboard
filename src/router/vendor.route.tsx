import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import Setting from "../pages/Setting";
import Notification from "../pages/Notification";
import ChangePasswordFrom from "../pages/ChangePasswordForm";
import PrivacyPolicy from "../pages/PrivaryPolicy";
import TermsAndCondition from "../pages/TermsAndCondition";
import AboutUs from "../pages/AboutUs";
import Otp from "../pages/Otp";
import UpdatePassword from "../pages/UpdatePassword";
import VendorDashboard from "../pages/VendorDashboard";
import VendorRestaurant from "../pages/VendorDashboard/Restaurant";
import CreateRestaurant from "../pages/VendorDashboard/Restaurant/CreateRestaurant";
import Order from "../pages/VendorDashboard/Order";
import Table from "../pages/VendorDashboard/Table";

export const vendorRoute = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
    element: <VendorDashboard />,
  },
  {
    name: "Restaurant",
    path: "restaurant",
    icon: <MdDashboard />,
    element: <VendorRestaurant />,
  },
  {
    name: "Order",
    path: "order",
    icon: <MdDashboard />,
    element: <Order />,
  },
  {
    name: "Table",
    path: "table",
    icon: <MdDashboard />,
    element: <Table />,
  },
  {
    path: "create-restaurant",
    element: <CreateRestaurant />,
  },

  {
    name: "Setting",
    path: "setting",
    icon: <CiSettings />,
    element: <Setting />,
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
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "terms",
    element: <TermsAndCondition />,
  },
  {
    path: "about",
    element: <AboutUs />,
  },
];
