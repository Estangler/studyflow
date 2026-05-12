import type { IUser, UserCredentials } from "../types/users";

export function validateLogin(credentials: UserCredentials, users: IUser[]) {
  if (!credentials.email.trim() || !credentials.email.includes("@"))
    return alert("Você precisa  digitar um email válido para fazer o login.");

  if (!credentials.password.trim() || credentials.password.length < 8)
    return alert("Você precisa  digitar uma senha válida para fazer o login.");

  const findUser = users.find((user) => user.email === credentials.email);

  if (!findUser) {
    return alert("Usuário não encontrado.");
  }

  if (findUser.password !== credentials.password) {
    return alert("Senha incorreta.");
  }
}
