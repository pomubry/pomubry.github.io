import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MdMenu } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { GrTechnology, GrContactInfo } from "react-icons/gr"; // Bugged, so override fill & stroke with css module

import styles from "./Links.module.css";
import type { IconType } from "react-icons";

interface MobileLinkProps {
  title: string;
  Icon: IconType;
}

type AnchorRef = React.LegacyRef<HTMLAnchorElement> | undefined;

const MobileLink = forwardRef(function Item(
  {
    className,
    title,
    Icon,
    ...props
  }: MobileLinkProps &
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
          className={`${styles.fillStroke} ${className} flex justify-between gap-5 rounded-lg p-3 text-sm font-bold duration-300 ease-linear hover:bg-purple-400/50`}
          {...props}
          ref={forwardedRef}
        >
          {title} {<Icon className="text-purple" />}
        </a>
      </NavigationMenu.Link>
    </li>
  );
});

const DesktopLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <NavigationMenu.Item className="hidden sm:block">
      <NavigationMenu.Link
        className="text-purple bg-card-hover rounded-lg p-3 font-bold shadow-lg"
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
        <NavigationMenu.List className="mx-3 flex gap-3 rounded-lg">
          <DesktopLink href="#projects" title="Projects" />
          <DesktopLink href="#technologies" title="Technologies" />
          <DesktopLink href="#contact" title="Contact" />

          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className={`block rounded-lg p-3 font-bold duration-300 ease-linear data-[state=open]:bg-gray-100/50 dark:data-[state=open]:bg-gray-900/50 sm:hidden`}
              aria-label="Toggle navigation menu"
              onPointerMove={(event) => event.preventDefault()}
              onPointerLeave={(event) => event.preventDefault()}
            >
              <MdMenu
                className={`${styles.BurgerMenu} text-purple`}
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              disableOutsidePointerEvents
              onPointerEnter={(event) => event.preventDefault()}
              onPointerLeave={(event) => event.preventDefault()}
              className={`${styles.NavigationMenuContent} bg-card`}
            >
              <ul className="p-3">
                <MobileLink
                  href="#projects"
                  title="Projects"
                  Icon={GoProjectRoadmap}
                />
                <MobileLink
                  href="#technologies"
                  title="Technologies"
                  Icon={GrTechnology}
                />
                <MobileLink
                  href="#contact"
                  title="Contact"
                  Icon={GrContactInfo}
                />
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator
            className={`${styles.NavigationMenuIndicator} top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden`}
          >
            <div className="bg-card relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="absolute left-0 top-full -translate-x-[50%] rounded-lg">
          <NavigationMenu.Viewport
            className={`${styles.NavigationMenuViewport} mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-lg shadow-lg sm:w-[var(--radix-navigation-menu-viewport-width)]`}
          />
        </div>
      </NavigationMenu.Root>
    </>
  );
};

export default BurgerMenu;
