import type { IUser } from "../types/users";

export function saveStorage(key: string, value: IUser[]) {
  localStorage.setItem(key, JSON.stringify(value));
}
