import { useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { Transition } from "@headlessui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";
import { getAppTheme, setDarkMode, setLightMode } from "@/lib/theme";

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
        <Switch.Root
          className="relative h-[25px] w-[42px] cursor-pointer rounded-full bg-gray-100 shadow-md outline-none duration-300 data-[state=checked]:bg-gray-900"
          id="theme-mode"
          checked={isDarkMode}
          onClick={toggleColorMode}
        >
          <Switch.Thumb
            className={`relative block h-[21px] w-[21px] translate-x-0.5 rounded-full bg-purple-300 text-gray-950 transition-transform duration-300 will-change-transform data-[state=checked]:translate-x-[19px]`}
          >
            <Transition
              show={isDarkMode}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <MdNightlight />
            </Transition>
            <Transition
              show={!isDarkMode}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
            >
              <MdLightMode />
            </Transition>
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};

export default ThemeToggle;
