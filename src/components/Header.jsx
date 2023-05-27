import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import MobileMenu from "../assets/menu.webp";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(() => true);
    };
    img.src = Logo;
  }, []);

  return (
    <header className="fixed flex items-center justify-between p-2 px-6 bg-black w-full z-20 text-main">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          {!imageLoaded ? (
            <Blurhash
              hash="a2Achm~m009IO;"
              width={40}
              height={40}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          ) : (
            <img className="w-12" src={Logo} alt="logo-img" />
          )}
        </Link>
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
