export function getStorage<T>(key: string, initialValue: T): T {
  const item = localStorage.getItem(key);

  if (!item) {
    return initialValue;
  }

  return JSON.parse(item);
}
