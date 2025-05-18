"use client";

import type {NavbarProps} from "@heroui/react";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@heroui/react";
import {Icon} from "@iconify/react";
import {cn} from "@heroui/react";
import { useTheme } from "next-themes";

const sections = ["home", "features", "pricing", "customers", "integrations"];

export default function NavbarComponent(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
      setHasScrolled(currentScrollPos > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = (open: boolean) => {
    setIsMenuOpen(open);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      setIsMenuOpen(false);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar
      {...props}
      shouldHideOnScroll={false}
      isBlurred={false}
      classNames={{
        base: cn(
          "fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-300 z-50 rounded-full", 
          {
            "w-[95%] max-w-7xl bg-white/5 dark:bg-zinc-900/5": !hasScrolled && !isMenuOpen,
            "w-full max-w-[720px] shadow-[0_2px_4px_-2px_rgba(0,0,0,0.05),0_4px_6px_-1px_rgba(0,0,0,0.10)] dark:bg-zinc-900/80 dark:backdrop-blur-md bg-white/80 backdrop-blur-md": hasScrolled || isMenuOpen,
          }
        ),
        wrapper: cn("px-2 transition-all duration-300", {
          "px-6": !hasScrolled && !isMenuOpen,
          "px-2": hasScrolled || isMenuOpen
        }),
        menu: [
          "mt-2",
          "transition-opacity duration-300",
          "backdrop-blur-md",
          "rounded-2xl",
          "gap-4",
          "p-6",
          "data-[open=true]:opacity-100",
          "data-[open=false]:opacity-0",
          "data-[open=false]:pointer-events-none",
        ],
        item: ["hidden md:flex", "data-[active=true]:font-medium", "text-foreground", "font-normal"],
      }}
      height="55px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuToggle}
    >
      <NavbarContent className={cn(
        "gap-6 w-full justify-between transition-all duration-300",
        {
          "gap-8": !hasScrolled && !isMenuOpen,
          "gap-6": hasScrolled || isMenuOpen
        }
      )} justify="end">
        <NavbarBrand className="basis-[48px]">
          <div className={cn(
            "flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-300",
            "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm"
          )}>
            <Icon icon="lucide:mountain" className="text-foreground w-6 h-6" />
          </div>
        </NavbarBrand>

        {/* Desktop Menu */}
        <NavbarContent className={cn(
          "hidden md:flex grow justify-center transition-all duration-300",
          {
            "gap-8": !hasScrolled && !isMenuOpen,
            "gap-6": hasScrolled || isMenuOpen
          }
        )} justify="center">
          {sections.map((section) => (
            <NavbarItem key={section} isActive={activeSection === section}>
              <Link 
                className="text-sm text-foreground no-underline hover:text-foreground"
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <div className="flex gap-2 basis-[140px] justify-end items-center">
          <NavbarItem className="hidden md:flex">
            <button
              className="rounded-[20px] bg-transparent mx-4 flex items-center justify-center transition-all duration-200"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && (
                <Icon 
                  icon={theme === 'dark' ? 'lucide:sun' : 'lucide:moon'} 
                  className="w-4 h-4 text-foreground"
                />
              )}
            </button>
            <Button
              className="bg-[#27272A] dark:bg-[#27272A] text-white dark:text-white text-sm font-normal rounded-full px-6 h-10"
            >
              Login
            </Button>
          </NavbarItem>
          <NavbarMenuToggle 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden text-foreground"
          />
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <NavbarMenuItem key={section} className="p-2">
              <Link
                className={cn(
                  "w-full py-2 text-foreground no-underline hover:text-foreground/80 transition-colors",
                  activeSection === section && "font-medium"
                )}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Button 
            className="w-full bg-[#27272A] dark:bg-[#27272A] text-white dark:text-white text-sm font-normal rounded-full h-10"
          >
            Login
          </Button>
          <Button
            className="w-full h-10 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center gap-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <>
                <Icon 
                  icon={theme === 'dark' ? 'lucide:sun' : 'lucide:moon'} 
                  className="w-5 h-5 text-foreground"
                />
                Switch to {theme === 'dark' ? 'light' : 'dark'} mode
              </>
            )}
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
