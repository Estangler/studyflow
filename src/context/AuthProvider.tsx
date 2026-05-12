import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { saveStorage } from "../storage/saveStorage";
import { STORAGE_KEYS } from "../storage/storageKeys";
import { getStorage } from "../storage/getStorage";
import { validateLogin } from "../validators/validateLogin";
import validateRegister from "../validators/validateRegister";
import type { IUser, UserCredentials } from "../types/context";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<IUser[]>(() => {
    return getStorage(STORAGE_KEYS.USERS, []);
  });

  function createUser(formData: Omit<IUser, "id">) {
    validateRegister(formData, users);

    const newUser: IUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  }

  useEffect(() => {
    saveStorage(STORAGE_KEYS.USERS, users);
  }, [users]);

  function login(credentials: UserCredentials) {
    validateLogin(credentials, users);
    alert("Login realizado com sucesso.");
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        createUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
