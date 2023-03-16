import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="app-header mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between p-[2em] font-sans font-bold uppercase text-text-primary dark:text-d-text-primary">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
