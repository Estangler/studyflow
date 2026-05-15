import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import type { UserCredentials } from "../types/context";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

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
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <main>
        <div className="mb-6 flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-primary text-primary-foreground">
            <Sparkles size={16} />
          </div>
          <span className="text-sm font-semibold">StudyFlow</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Bem-vindo de volta!
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Entre para continuar seus estudos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>
            <p className="text-sm">Email</p>

            <input
              type="email"
              value={credentials.email}
              name="email"
              onChange={handleCredentialsInput}
              placeholder="Ex: joao@email.com"
              className="w-full border"
            />
            {errors.email && <p>{errors.email}</p>}
          </label>
          <label>
            <p className="text-sm">Senha</p>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleCredentialsInput}
              placeholder="********"
              className="border px-2 rounded-sm"
            />
            {errors.password && <p>{errors.password}</p>}
          </label>
          <button className="w-50 h-8 border p-1 cursor-pointer hover:opacity-70 rounded-sm">
            Entrar
          </button>
        </form>
      </main>
      <footer>
        <p>Ainda não possuí uma conta?</p>
        <Link to={"/register"}>Faça sua conta!</Link>
      </footer>
    </div>
  );
}
