import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const NavLinks = () => {
  return (
    <div className="my-5 flex items-center gap-3">
      <Logo />
      <BurgerMenu />
      <ThemeToggle />
    </div>
  );
};

export default NavLinks;
