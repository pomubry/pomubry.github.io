import {
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

const BurgerMenu = () => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        aria-label="Menu toggle button"
        as={IconButton}
        icon={<Icon as={MdMenu} />}
        display={{ base: "flex", md: "none" }}
      />
      <MenuList minW={0}>
        <MenuItem as="a" href="#projects">
          Projects
        </MenuItem>
        <MenuItem as="a" href="#technologies">
          Technologies
        </MenuItem>
        <MenuItem as="a" href="#contact">
          Contact
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;
