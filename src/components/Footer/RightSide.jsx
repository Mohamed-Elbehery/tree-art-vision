import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="mt-12 w-full pb-6 px-12 md:px-0 lg:w-[33%]">
      <ul className="w-fit mx-auto flex flex-col gap-1 text-sm">
        <li className="mb-4">
          <h1 className="heading">Main Links</h1>
        </li>
        <li className="hover:text-main">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-main">
          <Link to={"/sketches"}>Sketches</Link>
        </li>
        <li className="hover:text-main">
          <Link to={"/decorative-pieces"}>Decorative Pieces</Link>
        </li>
        <li className="hover:text-main">
          <Link to={"/workshops"}>Workshops</Link>
        </li>
        <li className="hover:text-main">
          <Link to={"/about-us"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default RightSide;
