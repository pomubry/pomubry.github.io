import Links from "./Links";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const NavLinks = () => {
  return (
    <div className="my-5 flex items-center gap-3">
      <Logo />
      <Links />
      <ThemeToggle />
    </div>
  );
};

export default NavLinks;
