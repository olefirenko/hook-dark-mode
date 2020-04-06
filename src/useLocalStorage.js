import { useState, useEffect } from "react";

export const useLocalStorage = (name, initialValue = "") => {
  const [value, setValue] = useState(() => {
    try {
      const localStorageValue = localStorage.getItem(name);

      return localStorageValue !== null
        ? JSON.parse(localStorageValue)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch {
      // Error can be thrown when in incognito mode access the localStorage
    }
  }, [name, value]);

  return [value, setValue];
};
