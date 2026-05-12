import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { handleCredentialsInput, credentials } = useAuth();
  return (
    <div>
      <h1>Login</h1>
      <main>
        <form>
          <label>
            <p>
              Email <span className="text-red-600">*</span>
            </p>

            <input
              type="email"
              value={credentials.email}
              name="email"
              onChange={handleCredentialsInput}
              placeholder="Ex: joao@email.com"
              className="border px-2"
            />
          </label>
          <label>
            <p>
              Senha <span className="text-red-600">*</span>
            </p>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleCredentialsInput}
              placeholder="********"
              className="border px-2"
            />
          </label>
        </form>
        <button className="w-50 h-10 px-2 py-1 border mt-5">Entrar</button>
      </main>
      <nav>
        <p>Ainda não possuí uma conta?</p>
        <Link to={"/register"}>Faça sua conta!</Link>
      </nav>
    </div>
  );
}
