import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-8">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
