import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";

const Footer = () => {
  return (
    <footer className="text-white bg-black flex flex-col">
      {/* Top Part */}
      <div className="md:container md:mx-auto md:flex md:flex-row md:flex-wrap">
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </div>
      {/* Bottom Part */}
      <p className="py-5 text-center text-sm font-light border-t">
        Copyright ©2022 All rights reserved to Tree Art Vision.
      </p>
    </footer>
  );
};

export default Footer;
