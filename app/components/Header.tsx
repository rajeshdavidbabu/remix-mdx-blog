import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-8 py-8 font-sans font-bold uppercase text-text-primary dark:text-d-text-primary">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
