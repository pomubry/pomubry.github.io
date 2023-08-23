import { useEffect, useRef, useState } from "react";
import type { ToastProps } from "../types";

const useToastProps = () => {
  const [toastProps, setToastProps] = useState<ToastProps | null>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  const setToast = (props: ToastProps | null) => {
    const timeoutId = timerRef.current;
    clearTimeout(timeoutId);
    setToastProps(props);

    const newTimeoutId = setTimeout(() => {
      setToastProps(null);
    }, 5000);

    timerRef.current = newTimeoutId;
  };

  useEffect(() => {
    const timeoutId = timerRef.current;
    return () => clearTimeout(timeoutId);
  }, []);

  return { toastProps, setToast };
};

export default useToastProps;
