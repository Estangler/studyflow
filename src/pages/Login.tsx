import { Link } from "react-router-dom";

export default function Login() {
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
              name="email"
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
              placeholder="********"
              className="border px-2"
            />
          </label>
        </form>
        <button className="w-50 h-10 px-2 py-1 border">Entrar</button>
      </main>
      <nav>
        <Link to={"/register"}>Faça sua conta!</Link>
      </nav>
    </div>
  );
}
