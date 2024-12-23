import { useEffect, useState } from "react";
import { BrowserCheck } from "../browser";

export const useMediaQuery = (query: string) => {
  const isBrowser = BrowserCheck();

  const [matches, setMatches] = useState(
    isBrowser ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (isBrowser) {
      const mediaQueryList = window.matchMedia(query);
      const documentChangeHandler = () => setMatches(mediaQueryList.matches);

      mediaQueryList.addEventListener("change", documentChangeHandler);
      return () =>
        mediaQueryList.removeEventListener("change", documentChangeHandler);
    }
  }, [query, isBrowser]);

  return matches;
};

export const useIsMobile = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile;
};
