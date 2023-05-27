import { logo } from "../../assets";

const LeftSide = () => {
  return (
    <div className="px-32 md:w-[50%] lg:w-[33%] md:px-0">
      <div>
        <img className="w-16 mx-auto my-8 mb-6" src={logo} alt="" />
      </div>
      <p className="font-extralight text-sm xl:px-24">
        Family is like branches on a tree, we grow in different directions yet
        our roots remain as one.. From this point, our artistic family decided
        to Publish our art, fill your walls with art , color your life and
        spread happiness.
      </p>
    </div>
  );
};

export default LeftSide;
