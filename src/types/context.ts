import type { IUser } from "./users";

export interface IContext {
  users: IUser[];
  formData: IUser;
  createUser: (e: React.SubmitEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
