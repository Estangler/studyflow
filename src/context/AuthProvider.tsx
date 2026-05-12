import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { IUser, UserCredentials } from "../types/users";
import { saveStorage } from "../storage/saveStorage";
import { STORAGE_KEYS } from "../storage/storageKeys";
import { getStorage } from "../storage/getStorage";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<Omit<IUser, "id">>({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState<IUser[]>(() => {
    return getStorage(STORAGE_KEYS.USERS, []);
  });

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

  useEffect(() => {
    saveStorage(STORAGE_KEYS.USERS, users);
  }, [users]);

  function handleCredentialsInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setCredentials((prev) => ({ ...prev, [name]: value }));
  }

  function handleLogin(e: React.SubmitEvent) {
    e.preventDefault();

    if (!credentials.email.trim() || !credentials.email.includes("@"))
      return alert("Você precisa  digitar um email válido para fazer o login.");

    if (!credentials.password.trim() || credentials.password.length < 8)
      return alert(
        "Você precisa  digitar uma senha válida para fazer o login.",
      );

    const findUser = users.find((user) => user.email === credentials.email);

    if (!findUser) {
      return alert("Usuário não encontrado.");
    }

    if (findUser.password !== credentials.password) {
      return alert("Senha incorreta.");
    }

    alert("Login realizado com sucesso.");
  }

  console.log(users);

  return (
    <AuthContext.Provider
      value={{
        users,
        formData,
        credentials,
        createUser,
        handleInputChange,
        handleCredentialsInput,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
