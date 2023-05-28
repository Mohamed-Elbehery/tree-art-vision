import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden md:flex mr-3">
      <ul className="flex items-center">
        <li>
          <NavLink className={`link-lg`} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={` link-lg`} to={"/sketches"}>
            Sketches
          </NavLink>
        </li>
        <li>
          <NavLink className={` link-lg`} to={"/decorative-pieces"}>
            Decorative Pieces
          </NavLink>
        </li>
        <li>
          <NavLink className={` link-lg`} to={"/workshops"}>
            Workshops
          </NavLink>
        </li>
        <li>
          <NavLink className={` link-lg`} to={"/about-us"}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
