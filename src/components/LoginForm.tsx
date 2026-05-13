import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import type { UserCredentials } from "../types/context";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login, isAuthenticated } = useAuth();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  function handleCredentialsInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setCredentials((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const result = login(credentials);

    if (result && !result.isValid) {
      return setErrors(result.errors);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <main>
        <form onSubmit={handleSubmit}>
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
            {errors.email && <p>{errors.email}</p>}
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
            {errors.email && <p>{errors.email}</p>}
          </label>
          <button className="w-50 h-10 px-2 py-1 border mt-5 block cursor-pointer hover:opacity-70">
            Entrar
          </button>
        </form>
      </main>
      <nav>
        <p>Ainda não possuí uma conta?</p>
        <Link to={"/register"}>Faça sua conta!</Link>
      </nav>
    </div>
  );
}
