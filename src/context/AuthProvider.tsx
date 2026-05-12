import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { IUser, UserCredentials } from "../types/users";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<Omit<IUser, "id">>({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState<IUser[]>([]);

  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function createUser(e: React.SubmitEvent) {
    e.preventDefault();

    if (!formData.name.trim()) return alert("Digite um nome válido.");

    if (!formData.email.trim() || !formData.email.includes("@")) {
      return alert("Digite um email válido.");
    } else if (users.some((user) => user.email === formData.email)) {
      return alert("Email já cadastrado.");
    }

    if (!formData.password.trim() || formData.password.length < 8)
      return alert("Sua senha deve ter 8 ou mais caracteres.");

    const newUser: IUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ users, formData, createUser, handleInputChange }}
    >
      {children}
    </AuthContext.Provider>
  );
}
