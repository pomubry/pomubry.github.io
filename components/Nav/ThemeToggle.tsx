import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { MdNightlight, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const themeIcon = colorMode === "dark" ? MdNightlight : MdLightMode;

  return (
    <IconButton
      aria-label="Toggle theme button"
      icon={<Icon as={themeIcon} />}
      onClick={() => toggleColorMode()}
    />
  );
};

export default ThemeToggle;
