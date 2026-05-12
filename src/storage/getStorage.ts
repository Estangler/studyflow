import type { IUser } from "../types/users";

export function getStorage(key: string, value: IUser[]) {
  const item = localStorage.getItem(key);

  if (!item) {
    return value;
  }

  return JSON.parse(item);
}
