import { BrowserCheck } from "@/shared/lib/browser";
import { useEffect, useState } from "react";

export function useScrollIsTop() {
  const isBrowser = BrowserCheck();

  const [scrollIsTop, setScrollIsTop] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      setScrollIsTop(window.scrollY < 16);
      const scrollHandler = () => {
        setScrollIsTop(window.scrollY < 16);
      };

      window.addEventListener("scroll", scrollHandler);
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [isBrowser]);

  return { scrollIsTop, setScrollIsTop };
}
