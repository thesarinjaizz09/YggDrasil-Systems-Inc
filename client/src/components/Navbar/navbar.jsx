"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  // NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useState } from "react";
import { motion } from "motion/react";
import './styles.css'


export default function NavbarDemo() {
  const navItems = [
    {
      name: "Security",
      link: "#cloud",
    },
    {
      name: "Platform",
      link: "#platform",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Partners",
      link: "#partners",
    },
    {
      name: "Company",
      link: "#company",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div initial={{
      opacity: 0,
    }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: 0,
      }} className="flex items-center justify-center fixed w-full z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="flex navbar-responsive">
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <button className="cursor-pointer px-8 py-2 rounded-md bg-purple-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-purple-400">
              Dashboard
            </button>
            {/* <NavbarButton variant="primary">Dashboard</NavbarButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <button className="cursor-pointer px-8 py-2 rounded-md bg-purple-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-purple-400">
                Dashboard
              </button>
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton> */}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </motion.div>
  );
}