import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { IUser } from "../types/users";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState<IUser[]>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function createUser(e: React.SubmitEvent) {
    e.preventDefault();

    const newUser: IUser = {
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
  console.log(users);

  return (
    <AuthContext.Provider
      value={{ users, formData, createUser, handleInputChange }}
    >
      {children}
    </AuthContext.Provider>
  );
}
