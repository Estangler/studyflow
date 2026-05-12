import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <header>
        <h1>Hello Register!</h1>
        <Link to={"/"}>Faça login.</Link>
      </header>
      <main>
        <form>
          <label>
            <p>
              Nome completo <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
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
