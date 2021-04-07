import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const setScrollCallback = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", setScrollCallback, { passive: true });
    return () => window.removeEventListener("scroll", setScrollCallback);
  }, []);

  return scroll;
};
