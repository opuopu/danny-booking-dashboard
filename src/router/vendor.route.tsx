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

export const vendorRoute = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <MdDashboard />,
    element: <VendorDashboard />,
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
