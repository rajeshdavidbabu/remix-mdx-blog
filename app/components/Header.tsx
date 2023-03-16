import Logo from "./Logo";
import Nav from "./Nav";

export const Header = () => {
  return (
    <header className="sticky top-[0px] z-[1] mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between bg-inherit p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:text-d-text-primary">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
