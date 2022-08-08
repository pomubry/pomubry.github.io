import { Flex } from "@chakra-ui/react";
import BtnMenu from "./BtnMenu";
import BurgerMenu from "./BurgerMenu";
import LetterIcon from "./LetterIcon";
import ThemeToggle from "./ThemeToggle";

const NavLinks = () => {
  return (
    <Flex alignItems="center" p={5} gap={2}>
      <LetterIcon />
      <BtnMenu />
      <BurgerMenu />
      <ThemeToggle />
    </Flex>
  );
};

export default NavLinks;
