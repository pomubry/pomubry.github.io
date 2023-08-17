import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MdMenu } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { GrTechnology, GrContactInfo } from "react-icons/gr"; // Bugged, so override fill & stroke with css module

import styles from "./BurgerMenu.module.css";

interface PropType {
  title: string;
  icon: React.ReactNode;
}

type AnchorRef = React.LegacyRef<HTMLAnchorElement> | undefined;

const ListItem = forwardRef(function Item(
  {
    className,
    title,
    icon,
    ...props
  }: PropType &
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
  forwardedRef: AnchorRef,
) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={`flex select-none justify-between gap-5 rounded-[6px] p-3 text-[15px] font-bold leading-none text-purple-600 no-underline outline-none transition-colors hover:bg-purple-300/50 focus:shadow-[0_0_0_2px] focus:shadow-purple-600 dark:text-purple-300 ${className}`}
          {...props}
          ref={forwardedRef}
        >
          {title} {icon}
        </a>
      </NavigationMenu.Link>
    </li>
  );
});

const LinkItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <NavigationMenu.Item className="hidden sm:block">
      <NavigationMenu.Link
        className="block select-none rounded-lg p-3 font-bold leading-none text-purple-600 no-underline outline-none duration-300 hover:bg-purple-300/60 focus:shadow-blue-300 dark:text-purple-300 dark:hover:bg-purple-300/20"
        href={href}
      >
        {title}
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

const BurgerMenu = () => {
  return (
    <>
      <NavigationMenu.Root className="relative z-[1]">
        <NavigationMenu.List className="mx-3 flex list-none gap-3 rounded-lg duration-300">
          <LinkItem href="#projects" title="Projects" />
          <LinkItem href="#technologies" title="Technologies" />
          <LinkItem href="#contact" title="Contact" />

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="block select-none rounded-lg p-3 font-bold outline-none duration-300 hover:bg-purple-300/60 dark:hover:bg-purple-300/20 sm:hidden">
              <MdMenu
                className="relative top-[1px] text-purple-600 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180 dark:text-purple-300"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight bg-gray-100 dark:bg-gray-900">
              <ul className="list-none p-3">
                <ListItem
                  href="#projects"
                  title="Projects"
                  icon={<GoProjectRoadmap className={styles.fillStroke} />}
                />
                <ListItem
                  href="#technologies"
                  title="Technologies"
                  icon={<GrTechnology className={styles.fillStroke} />}
                />
                <ListItem
                  href="#contact"
                  title="Contact"
                  icon={<GrContactInfo className={styles.fillStroke} />}
                />
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-gray-100 dark:bg-gray-900" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute left-0 top-full -translate-x-[50%] rounded-lg">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut mt-[7px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-lg transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu.Root>
    </>
  );
};

export default BurgerMenu;
