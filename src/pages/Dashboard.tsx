import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      Hello {currentUser?.name}
      <button onClick={logout}>Sair.</button>
    </div>
  );
}
