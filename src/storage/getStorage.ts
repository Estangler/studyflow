export function getStorage<T>(key: string, InitialValue: T): T {
  const item = localStorage.getItem(key);

  if (!item) {
    return InitialValue;
  }

  return JSON.parse(item);
}
