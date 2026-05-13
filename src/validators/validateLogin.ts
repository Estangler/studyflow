import type {
  IUser,
  IValidationResult,
  UserCredentials,
} from "../types/context";

export function validateLogin(
  credentials: UserCredentials,
  users: IUser[],
): IValidationResult {
  const errors: Record<string, string> = {};

  const email = credentials.email.trim();
  const password = credentials.password.trim();

  if (!email || !email.includes("@")) {
    errors.email = "Email inválido.";
  }

  if (!password || password.length < 8) {
    errors.password = "Senha inválida";
  }

  const findUser = users.find((user) => user.email === email);

  if (!findUser) {
    errors.email = errors.email ?? "Usuário não encontrado.";
  } else if (findUser.password !== password) {
    errors.password = "Senha incorreta.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
