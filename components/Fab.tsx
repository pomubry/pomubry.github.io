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
            className="fixed bottom-10 right-10 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-gray-100 text-purple-600 shadow-sm shadow-black outline-none duration-300 hover:bg-gray-300 focus:shadow-lg focus:shadow-black dark:bg-gray-900 dark:text-purple-300 dark:hover:bg-gray-700"
          >
            <IoIosArrowUp />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`${styles.TooltipContent} select-none rounded-lg bg-gray-100 p-4 text-sm leading-none text-purple-600 shadow-xl will-change-[transform,opacity] dark:bg-gray-900 dark:text-purple-300`}
            sideOffset={5}
          >
            Scroll to the top
            <Tooltip.Arrow className=" fill-gray-100 dark:fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default Fab;
