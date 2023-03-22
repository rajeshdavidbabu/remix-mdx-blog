import { NavLink } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { mobileMenuAnimationProps } from "~/data/animationConfig";

const activeClassName = "selected navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : "navlink")}
      >
        Home
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? activeClassName : "navlink")}
      >
        Blog
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        <div className="w-[75px]">
          <ThemeToggle />
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-links"
            {...mobileMenuAnimationProps}
            className="mt-4 basis-full md:hidden"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
