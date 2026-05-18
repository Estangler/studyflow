import useAuth from "../hooks/useAuth";
import { useState } from "react";
import type { IUser } from "../types/context";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const { register } = useAuth();
  const [formData, setFormData] = useState<Omit<IUser, "id">>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const result = register(formData);

    if (result && !result.isValid) {
      return setErrors(result.errors);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <header>
        <span className="text-primary hover:underline text-xs">
          <Link to={"/"}>Voltar</Link>
        </span>
        <h1 className="text-2xl font-semibold tracking-tight">
          Crie sua conta
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Comece a estudar em minutos
        </p>
      </header>
      <main>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="space-y-1.5">
              <p className="text-sm font-medium">Nome</p>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ex: João da Silva Sauro"
                className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none  ${errors.name ? "border-destructive focus:ring-2 focus:ring-destructive" : "border-border focus:ring-2 focus:ring-ring focus:border-primary"}`}
              />
              {errors.name && (
                <p className="text-xs text-destructive">{errors.name}</p>
              )}
            </label>
          </div>

          <div>
            <label className="space-y-1.5">
              <p className="text-sm font-medium">E-mail</p>
              <input
                type="email"
                value={formData.email}
                autoComplete="off"
                onChange={handleInputChange}
                name="email"
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
              <p className="text-sm font-medium">Senha</p>
              <input
                type="password"
                value={formData.password}
                autoComplete="off"
                onChange={handleInputChange}
                name="password"
                placeholder="Mínimo 8 caracteres."
                className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none  ${errors.password ? "border-destructive focus:ring-2 focus:ring-destructive" : "border-border focus:ring-2 focus:ring-ring focus:border-primary"}`}
              />
              {errors.password && (
                <p className="text-xs text-destructive">{errors.password}</p>
              )}
            </label>
          </div>

          <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.99] outline-border">
            Criar conta
          </button>
        </form>
      </main>
    </div>
  );
}
