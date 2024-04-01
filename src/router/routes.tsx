import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import MainLayout from "../layout/MainLayout";

import VerifyOtp from "../pages/VerifyOtp";
import NewPassword from "../pages/NewPassword";
import { routeGenerator } from "../utils/routeGenerator";
import { adminRoute } from "./admin.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: routeGenerator(adminRoute),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
export default router;
