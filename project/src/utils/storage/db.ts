const DB_NAME = 'EdenFinance';
const DB_VERSION = 1;

export interface DBSchema {
  budgets: {
    key: string;
    value: ArrayBuffer;
  };
  transactions: {
    key: string;
    value: ArrayBuffer;
  };
  bills: {
    key: string;
    value: ArrayBuffer;
  };
}

export async function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      
      // Create object stores if they don't exist
      if (!db.objectStoreNames.contains('budgets')) {
        db.createObjectStore('budgets');
      }
      if (!db.objectStoreNames.contains('transactions')) {
        db.createObjectStore('transactions');
      }
      if (!db.objectStoreNames.contains('bills')) {
        db.createObjectStore('bills');
      }
    };
  });
}