import { Link } from "react-router-dom";
import { logo, facebook, instagram } from "../assets";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="px-32 flex flex-col">
        <div>
          {/* Image */}
          <div>
            <img className="w-16 mx-auto my-8 mb-6" src={logo} alt="" />
          </div>
          <p className="font-light text-sm">
            Family is like branches on a tree, we grow in different directions
            yet our roots remain as one.. From this point, our artistic family
            decided to Publish our art, fill your walls with art , color your
            life and spread happiness.
          </p>
        </div>
        <div className="mt-8">
          <h1 className="heading text-center">Contact INFO</h1>
          <div className="flex justify-center gap-4 mt-4">
            <div className="hover:bg-darkBlue bg-white p-3 rounded-full cursor-pointer transition-all duration-300 ease-linear">
              <img className="w-6" src={facebook} alt="facebook-logo" />
            </div>
            <div className="hover:bg-deepPink bg-white p-3 rounded-full cursor-pointer transition-all duration-300 ease-linear">
              <img className="w-6" src={instagram} alt="instagram-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full pb-6 border-b">
        <ul className="w-fit mx-auto flex flex-col gap-1 text-sm">
          <li className="mb-4">
            <h1 className="heading">Main Links</h1>
          </li>
          <li className="hover:text-main">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-main">
            <Link to={"/"}>Sketches</Link>
          </li>
          <li className="hover:text-main">
            <Link to={"/"}>Decorative Pieces</Link>
          </li>
          <li className="hover:text-main">
            <Link to={"/"}>Workshops</Link>
          </li>
          <li className="hover:text-main">
            <Link to={"/"}>About</Link>
          </li>
        </ul>
      </div>
      <p className="py-5 text-center text-sm font-light">
        Copyright ©2022 All rights reserved to Tree Art Vision.
      </p>
    </footer>
  );
};

export default Footer;
