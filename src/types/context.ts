export interface UserCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

export interface IContext {
  users: IUser[];
  register: (formData: Omit<IUser, "id" | "isLoggedIn">) => void;
  login: (credentials: UserCredentials) => void;
}
