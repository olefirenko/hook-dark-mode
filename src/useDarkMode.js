import { useLocalStorage, useMediaQuery } from "./index";

export const useDarkMode = () => {
  const prefersDarkModeMediaQuery = useMediaQuery(
    "(prefers-color-scheme: dark)"
  );
  const [prefersDarkMode, setDarkMode] = useLocalStorage(
    "prefers-dark-mode",
    prefersDarkModeMediaQuery
  );

  return [prefersDarkMode, setDarkMode];
};
