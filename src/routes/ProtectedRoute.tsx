import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
