import type { IUser } from "../types/context";

export default function validateRegister(
  formData: Omit<IUser, "id" | "isLoggedIn">,
  users: IUser[],
) {
  if (!formData.name.trim()) return alert("Digite um nome válido.");

  if (!formData.email.trim() || !formData.email.includes("@")) {
    return alert("Digite um email válido.");
  } else if (users.some((user) => user.email === formData.email)) {
    return alert("Email já cadastrado.");
  }

  if (!formData.password.trim() || formData.password.length < 8)
    return alert("Sua senha deve ter 8 ou mais caracteres.");
}
