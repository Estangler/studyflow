export interface UserCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IContext {
  users: IUser[];
  createUser: (formData: Omit<IUser, "id">) => void;
  login: (credentials: UserCredentials) => void;
}
