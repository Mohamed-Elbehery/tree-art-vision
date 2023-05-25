import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import MobileMenu from "../assets/menu.webp";
import { useState } from "react";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);

  return (
    <header className="fixed flex items-center justify-between p-2 px-6 bg-black w-full z-20 text-main">
      {/* Logo */}
      <div>
        <img className="w-12" src={Logo} alt="logo-img" />
      </div>
      {/* Menu */}
      <nav className="hidden md:flex mr-3">
        <ul className="flex items-center">
          <li className="link-lg active">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="link-lg">
            <Link to={"/"}>Sketches</Link>
          </li>
          <li className="link-lg">
            <Link to={"/"}>Decorative Pieces</Link>
          </li>
          <li className="link-lg">
            <Link to={"/"}>Workshops</Link>
          </li>
          <li className="link-lg">
            <Link to={"/"}>About Us</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <img
        className="md:hidden w-8 mr-3 cursor-pointer"
        src={MobileMenu}
        onClick={() => setIsMenuHidden(!isMenuHidden)}
        alt="menu-icon"
      />
      <nav
        style={{
          clipPath: `circle(${isMenuHidden ? "1500px" : "0"} at 90% -10%)`,
          WebkitClipPath: `circle(${
            isMenuHidden ? "1500px" : "0"
          } at 90% -10%)`,
        }}
        className={`mobile-menu z-30`}
      >
        <ul>
          <li className="link active">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="link">
            <Link to={"/"}>Sketches</Link>
          </li>
          <li className="link">
            <Link to={"/"}>Decorative Pieces</Link>
          </li>
          <li className="link">
            <Link to={"/"}>Workshops</Link>
          </li>
          <li className="link">
            <Link to={"/"}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
