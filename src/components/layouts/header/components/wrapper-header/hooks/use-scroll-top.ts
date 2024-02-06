import { useEffect, useState } from "react";

const BrowserCheck = () => typeof window !== "undefined";
// console.log({ isBrowser: isBrowser() })

export function useScrollIsTop() {
  const isBrowser = BrowserCheck();

  const [scrollIsTop, setScrollIsTop] = useState(
    isBrowser ? window.screenY < 16 : true
  );

  useEffect(() => {
    if (isBrowser) {
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
