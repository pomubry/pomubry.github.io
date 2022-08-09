import { Flex } from "@chakra-ui/react";
import BtnMenu from "./BtnMenu";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const NavLinks = () => {
  return (
    <Flex gap={2}>
      <Logo />
      <BtnMenu />
      <BurgerMenu />
      <ThemeToggle />
    </Flex>
  );
};

export default NavLinks;
