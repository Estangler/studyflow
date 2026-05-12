import type { IUser, UserCredentials } from "../types/context";

export function validateLogin(credentials: UserCredentials, users: IUser[]) {
  if (!credentials.email.trim() || !credentials.email.includes("@")) {
    alert("Você precisa  digitar um email válido para fazer o login.");
    return;
  }

  if (!credentials.password.trim() || credentials.password.length < 8) {
    alert("Você precisa  digitar uma senha válida para fazer o login.");
    return;
  }

  const findUser = users.find((user) => user.email === credentials.email);

  if (!findUser) {
    alert("Usuário não encontrado.");
    return;
  }

  if (findUser.password !== credentials.password) {
    alert("Senha incorreta.");
    return;
  }
}
