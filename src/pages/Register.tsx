import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const { createUser, handleInputChange, formData } = useAuth();
  return (
    <div>
      <header>
        <h1>Hello Register!</h1>
        <Link to={"/"}>Faça login.</Link>
      </header>
      <main>
        <form onSubmit={createUser}>
          <label>
            <p>
              Nome completo <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ex: João da Silva Sauro"
              className="border px-2"
            />
          </label>

          <label>
            <p>
              E-mail <span className="text-red-600">*</span>
            </p>
            <input
              type="email"
              value={formData.email}
              autoComplete="off"
              onChange={handleInputChange}
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
              value={formData.password}
              autoComplete="off"
              onChange={handleInputChange}
              name="password"
              placeholder="********"
              className="border px-2"
            />
            <p>Mínimo 8 caracteres.</p>
          </label>

          <button className="w-50 h-10 px-2 py-1 border">Criar conta</button>
        </form>
      </main>
      <footer></footer>
    </div>
  );
}
