import { useState, useEffect } from "react";

export const useMediaQuery = (mediaQuery) => {
  const mediaQueryListObject = window.matchMedia(mediaQuery);
  const [matches, setMatches] = useState(mediaQueryListObject.matches);

  useEffect(() => {
    const handleEvent = (e) => {
      setMatches(!!e.matches);
    };

    mediaQueryListObject.addEventListener("change", handleEvent);

    return () => {
      mediaQueryListObject.removeEventListener("change", handleEvent);
    };
  }, [mediaQueryListObject]);

  return matches;
};
