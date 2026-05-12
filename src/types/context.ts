import type { IUser } from "./users";

export interface IContext {
  users: IUser[];
  formData: Omit<IUser, "id">;
  createUser: (e: React.SubmitEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
