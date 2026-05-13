import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { currentUser } = useAuth();
  return <div>Hello {currentUser?.name}</div>;
}
