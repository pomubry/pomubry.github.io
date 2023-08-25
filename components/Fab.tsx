import * as Tooltip from "@radix-ui/react-tooltip";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./Fab.module.css";

const Fab = () => {
  const handleScroll = () => {
    const body = document.querySelector("body");
    body?.scrollIntoView();
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            onClick={handleScroll}
            className="text-purple bg-card fixed bottom-10 right-10 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full shadow-sm shadow-black hover:bg-gray-300 focus:shadow-lg focus:shadow-black dark:hover:bg-gray-700"
            aria-label="Scroll to the top"
          >
            <IoIosArrowUp />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`${styles.TooltipContent} text-purple bg-card select-none rounded-lg p-4 text-sm font-semibold leading-none shadow-lg will-change-[transform,opacity]`}
            sideOffset={5}
          >
            Scroll to the top
            <Tooltip.Arrow className="duration-ease fill-gray-100 dark:fill-slate-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default Fab;
