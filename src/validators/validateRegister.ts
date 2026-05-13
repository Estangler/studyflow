import type { IUser, IValidationResult } from "../types/context";

export default function validateRegister(
  formData: Omit<IUser, "id">,
  users: IUser[],
): IValidationResult {
  const errors: Record<string, string> = {};

  const name = formData.name.trim();
  const email = formData.email.trim();
  const password = formData.password.trim();

  if (!name) {
    errors.name = "Digite um nome válido.";
  }
  if (!email || !email.includes("@")) {
    errors.email = "Digite um email válido.";
  } else if (users.some((user) => user.email === email)) {
    errors.email = "Esse email já consta no nosso banco de dados.";
  }

  if (!password || password.length < 8) {
    errors.password = "Senha inválida.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
