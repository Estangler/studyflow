import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { saveStorage } from "../storage/saveStorage";
import { STORAGE_KEYS } from "../storage/storageKeys";
import { getStorage } from "../storage/getStorage";
import { validateLogin } from "../validators/validateLogin";
import validateRegister from "../validators/validateRegister";
import type {
  IUser,
  IValidationResult,
  UserCredentials,
} from "../types/context";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<IUser[]>(() => {
    return getStorage(STORAGE_KEYS.USERS, []);
  });

  const [currentUser, setCurrentUser] = useState<Omit<
    IUser,
    "password"
  > | null>(() => {
    return getStorage(STORAGE_KEYS.CURRENT_USER, null);
  });

  const isAuthenticated = !!currentUser;

  function register(formData: Omit<IUser, "id">): IValidationResult {
    const result = validateRegister(formData, users);

    if (!result.isValid) return result;

    const newUser: IUser = {
      id: Date.now(),
      ...formData,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);

    return { isValid: true, errors: {} };
  }

  useEffect(() => {
    saveStorage(STORAGE_KEYS.USERS, users);
  }, [users]);

  function login(credentials: UserCredentials): IValidationResult {
    const result = validateLogin(credentials, users);

    if (!result.isValid) return result;

    const foundUser = users.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password,
    );

    if (!foundUser) {
      return { isValid: false, errors: { email: "Usuário não encontrado." } };
    }

    const { password: _, ...safeUser } = foundUser;

    setCurrentUser(safeUser);
    saveStorage(STORAGE_KEYS.CURRENT_USER, safeUser);

    return { isValid: true, errors: {} };
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
