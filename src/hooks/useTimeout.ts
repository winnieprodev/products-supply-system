import { useEffect } from "react";

export const useTimeout = (
  callback: () => void,
  timeout: number,
  condition = true,
) => {
  useEffect(() => {
    if (!condition) {
      return;
    }
    const timer = setTimeout(callback, timeout);
    return () => clearTimeout(timer);
  }, [callback, timeout, condition]);
};
