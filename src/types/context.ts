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

export interface IValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface IContext {
  users: IUser[];
  register: (formData: Omit<IUser, "id">) => void;
  login: (credentials: UserCredentials) => void;
  currentUser: Omit<IUser, "password"> | null;
  isAuthenticated: boolean;
  logout: () => void;
}
