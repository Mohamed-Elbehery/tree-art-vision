import { Link } from "react-router-dom";
import { logo } from "../../assets";

const Logo = ({ handleClick }) => {
  return (
    <div>
      <Link onClick={handleClick} to={"/"}>
        <img className="w-12" src={logo} alt="logo-img" />
      </Link>
    </div>
  );
};

export default Logo;
