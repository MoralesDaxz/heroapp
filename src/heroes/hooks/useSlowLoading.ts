import { useEffect, useState } from "react";

interface UseSlowLoadingOptions {
  isActive: boolean;
  delay?: number;
}

export const useSlowLoading = ({
  isActive,
  delay = 5000,
}: UseSlowLoadingOptions) => {
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setIsSlow(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
      setIsSlow(false);
    };
  }, [isActive, delay]);

  return isSlow;
};
