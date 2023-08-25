import { useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { Transition } from "@headlessui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import { getAppTheme, setDarkMode, setLightMode } from "@/lib/theme";

import type { IconType } from "react-icons";

const IconTransition = ({ show, Icon }: { show: boolean; Icon: IconType }) => (
  <Transition
    show={show}
    enter="transition-opacity duration-300 ease-linear"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition-opacity duration-300 ease-linear"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
  >
    <Icon />
  </Transition>
);

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  const toggleColorMode = () => {
    if (isDarkMode) {
      setLightMode();
      setIsDarkMode(false);
    } else {
      setDarkMode();
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    if (getAppTheme() === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  if (isDarkMode === null) return null;

  return (
    <form>
      <div className="flex items-center">
        <label className="hidden" htmlFor="theme-mode">
          Toggle dark mode
        </label>

        <Switch.Root
          className="duration-ease relative h-[25px] w-[42px] cursor-pointer rounded-full bg-gray-100 shadow-lg data-[state=checked]:bg-gray-900"
          id="theme-mode"
          checked={isDarkMode}
          onClick={toggleColorMode}
          aria-label="Toggle dark mode"
        >
          <Switch.Thumb
            className={`duration-ease relative block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-purple-300 text-gray-950 transition-transform will-change-transform data-[state=checked]:translate-x-[19px]`}
          >
            <IconTransition show={isDarkMode} Icon={MdNightlight} />
            <IconTransition show={!isDarkMode} Icon={MdLightMode} />
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};

export default ThemeToggle;
