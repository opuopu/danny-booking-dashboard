import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface PrivateRouteProps {
  children: ReactNode;
  role: string | undefined;
}
const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  if (!role) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoute;
