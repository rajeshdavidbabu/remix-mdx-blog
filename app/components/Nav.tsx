import { NavLink } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const activeClassName = "selected navlink";

  return (
    <nav className="flex flex-[1] items-center justify-end font-sans font-bold uppercase">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClassName : "navlink")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeClassName : "navlink")}
      >
        About
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? activeClassName : "navlink")}
      >
        Blog
      </NavLink>
      <div className="w-[75px]">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Nav;
