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
  register: (formData: Omit<IUser, "id">) => IValidationResult;
  login: (credentials: UserCredentials) => IValidationResult;
  currentUser: Omit<IUser, "password"> | null;
  isAuthenticated: boolean;
  logout: () => void;
}
