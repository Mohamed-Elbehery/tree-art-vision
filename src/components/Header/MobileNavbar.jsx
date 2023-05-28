import { NavLink } from "react-router-dom";
import MobileMenu from "../../assets/menu.webp";

const MobileNavbar = ({ isMenuHidden, setIsMenuHidden, handleClick }) => {
  return (
    <>
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
        <ul className="flex flex-col gap-10">
          <li>
            <NavLink onClick={handleClick} className={`link`} to={`/`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className={`link`} to={`/sketches`}>
              Sketches
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              className={`link`}
              to={`/decorative-pieces`}
            >
              Decorative Pieces
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className={`link`} to={`/workshops`}>
              Workshops
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleClick} className={`link`} to={`/about-us`}>
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavbar;
