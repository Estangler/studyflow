import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <nav>
        <Link to={"/register"}>Faça sua conta!</Link>
      </nav>
    </div>
  );
}
