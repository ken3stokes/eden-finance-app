import { DBSchema } from './db';

export async function saveItem<T extends keyof DBSchema>(
  db: IDBDatabase,
  store: T,
  key: string,
  value: DBSchema[T]['value']
): Promise<void> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, 'readwrite');
    const objectStore = transaction.objectStore(store);
    const request = objectStore.put(value, key);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

export async function getItem<T extends keyof DBSchema>(
  db: IDBDatabase,
  store: T,
  key: string
): Promise<DBSchema[T]['value'] | null> {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(store, 'readonly');
    const objectStore = transaction.objectStore(store);
    const request = objectStore.get(key);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || null);
  });
}