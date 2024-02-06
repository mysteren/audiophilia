import { useEffect, useState } from "react";

export function useScrollIsTop() {
  const [scrollIsTop, setScrollIsTop] = useState(
    window ? window.screenY < 16 : true
  );

  useEffect(() => {
    if (window) {
      const scrollHandler = () => {
        setScrollIsTop(window.scrollY < 16);
      };

      window.addEventListener("scroll", scrollHandler);
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }
  }, []);

  return { scrollIsTop, setScrollIsTop };
}
