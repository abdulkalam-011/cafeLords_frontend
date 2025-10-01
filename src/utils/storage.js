export const saveToLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocal = (key, fallback = null) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

export const clearLocal = (key) => localStorage.removeItem(key);