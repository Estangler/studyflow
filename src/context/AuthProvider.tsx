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

  const [currentUser, setCurrentUser] = useState<IUser | null>(() => {
    return getStorage(STORAGE_KEYS.CURRENT_USER, null);
  });

  const isAuthenticated = !!currentUser;

  function register(formData: Omit<IUser, "id">) {
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
    const foundUser = users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password,
    );

    if (!foundUser) {
      return false;
    }

    setCurrentUser(foundUser);
    saveStorage(STORAGE_KEYS.CURRENT_USER, foundUser);
    validateLogin(credentials, users);
  }

  function logout() {
    setCurrentUser(null);
    saveStorage(STORAGE_KEYS.CURRENT_USER, null);
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        register,
        login,
        currentUser,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
