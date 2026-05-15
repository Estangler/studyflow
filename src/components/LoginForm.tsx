import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import type { UserCredentials } from "../types/context";
import { useNavigate } from "react-router-dom";
import { BowArrow } from "lucide-react";

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
            <BowArrow size={16} />
          </div>
          <span className="text-sm font-semibold">StudyFlow</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Bem-vindo de volta!
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Entre para continuar seus estudos.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <div>
            <label className="space-y-1.5">
              <p className="text-sm font-medium">Email</p>
              <input
                type="email"
                value={credentials.email}
                name="email"
                onChange={handleCredentialsInput}
                placeholder="Ex: joao@email.com"
                className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none  ${errors.email ? "border-destructive focus:ring-2 focus:ring-destructive" : "border-border focus:ring-2 focus:ring-ring focus:border-primary"}`}
              />
              {errors.email && (
                <p className="text-xs text-destructive">{errors.email}</p>
              )}
            </label>
          </div>
          <div>
            <label className="space-y-1.5">
              <p className="text-sm">Senha</p>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleCredentialsInput}
                placeholder="********"
                className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none  ${errors.password ? "border-destructive focus:ring-2 focus:ring-destructive" : "border-border focus:ring-2 focus:ring-ring focus:border-primary"}`}
              />
              {errors.password && (
                <p className="text-xs text-destructive">{errors.password}</p>
              )}
            </label>
          </div>
          <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.99] outline-border">
            Entrar
          </button>
        </form>
      </main>
      <footer>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          Não tem conta?
          <Link to={"/register"} className="text-primary hover:underline">
            <span> Criar conta!</span>
          </Link>
        </p>
      </footer>
    </div>
  );
}
