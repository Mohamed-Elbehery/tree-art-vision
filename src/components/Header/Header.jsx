import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";
import useHandleNavigation from "../../hooks/useHandleNavigation";

const Header = () => {
  const { isMenuHidden, setIsMenuHidden, handleClick } = useHandleNavigation();
  return (
    <header className="fixed flex h-16 items-center justify-between p-2 px-6 bg-black w-full z-20 text-main">
      {/* Logo */}
      <Logo handleClick={handleClick} />
      {/* Menu */}
      <Navbar />
      {/* Mobile Menu */}
      <MobileNavbar
        isMenuHidden={isMenuHidden}
        setIsMenuHidden={setIsMenuHidden}
        handleClick={handleClick}
      />
    </header>
  );
};

export default Header;
