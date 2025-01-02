// TODO: Implement encryption before storing data
// This would involve:
// 1. Getting user's encryption key
// 2. Encrypting data before storage
// 3. Decrypting data after retrieval

export const saveToStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to storage:', error);
  }
};

export const getFromStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from storage:', error);
    return null;
  }
};