import { useState, useEffect } from "react";

export const useLocalStorage = (name, initialValue = "") => {
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem(name)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(value));
  }, [name, value]);

  return [value, setValue];
};
