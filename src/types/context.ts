import type { IUser, UserCredentials } from "./users";

export interface IContext {
  users: IUser[];
  formData: Omit<IUser, "id">;
  credentials: UserCredentials;
  createUser: (e: React.SubmitEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCredentialsInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
