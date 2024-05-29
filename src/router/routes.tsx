import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import NewPassword from "../pages/NewPassword";
import VerifyOtp from "../pages/VerifyOtp";
import { routeGenerator } from "../utils/routeGenerator";
import { vendorRoute } from "./admin.route.";
import PrivateRoute from "./PrivateRoutes";
import { subAdminRoute } from "./subAdmin.route";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/super_admin",
    element: (
      <PrivateRoute role="super_admin">
        <App />
      </PrivateRoute>
    ),
    children: routeGenerator(vendorRoute),
  },
  {
    path: "/sub_admin",
    element: (
      <PrivateRoute role="sub_admin">
        <App />
      </PrivateRoute>
    ),
    children: routeGenerator(subAdminRoute),
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
