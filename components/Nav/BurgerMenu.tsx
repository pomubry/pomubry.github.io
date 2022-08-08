import {
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

type MyLinkProps = {
  href: string;
};

const MyLink = ({ href }: MyLinkProps) => {
  return (
    <Link width="100%" href={`#${href}`}>
      {href[0].toUpperCase() + href.slice(1)}
    </Link>
  );
};

const BurgerMenu = () => {
  return (
    <Menu>
      <MenuButton
        aria-label="Menu toggle button"
        as={IconButton}
        icon={<Icon as={MdMenu} />}
        display={{ base: "flex", md: "none" }}
      />
      <MenuList>
        <MenuItem>
          <MyLink href="projects" />
        </MenuItem>
        <MenuItem>
          <MyLink href="technologies" />
        </MenuItem>
        <MenuItem>
          <MyLink href="contact" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default BurgerMenu;
