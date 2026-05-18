import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import TaskProvider from "../context/TaskProvider";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <TaskProvider>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </TaskProvider>
  );
}
