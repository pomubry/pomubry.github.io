import * as ToastPrimitive from "@radix-ui/react-toast";
import { FaWindowClose } from "react-icons/fa";
import type { Status, ToastProps } from "@/lib/types";

import styles from "./Toast.module.css";

interface PropType {
  toastProps: ToastProps | null;
  // eslint-disable-next-line no-unused-vars
  setToast: (props: ToastProps | null) => void;
}

const getBGColor = (status?: Status) => {
  switch (status) {
    case "success":
      return "bg-green-300 dark:bg-green-600";
    case "error":
      return "bg-red-300 dark:bg-red-600";
    default:
      return "bg-gray-100 dark:bg-gray-900";
  }
};

const Toast = ({ toastProps, setToast }: PropType) => {
  if (!toastProps) return null;

  return (
    <ToastPrimitive.Provider>
      <ToastPrimitive.Root
        className={`${styles.ToastRoot} ${getBGColor(
          toastProps.status,
        )} z-[2] grid max-w-xs gap-3 rounded-lg p-3 shadow-lg`}
        open={toastProps !== null}
        onOpenChange={() => setToast(null)}
      >
        <div className="flex items-center justify-between gap-5">
          <ToastPrimitive.Title className="text-lg font-extrabold">
            {toastProps.title}
          </ToastPrimitive.Title>
          <ToastPrimitive.Close aria-label="Close">
            <span aria-hidden>
              <FaWindowClose />
            </span>
          </ToastPrimitive.Close>
        </div>
        <ToastPrimitive.Description className="text-sm">
          {toastProps.description}
        </ToastPrimitive.Description>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className="fixed bottom-20 right-5" />
    </ToastPrimitive.Provider>
  );
};

export default Toast;
