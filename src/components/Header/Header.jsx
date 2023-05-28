import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed flex h-16 items-center justify-between p-2 px-6 bg-black w-full z-20 text-main">
      {/* Logo */}
      <Logo />
      {/* Menu */}
      <Navbar />
      {/* Mobile Menu */}
      <MobileNavbar />
    </header>
  );
};

export default Header;
