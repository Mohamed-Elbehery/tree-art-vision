import {
  sketch1,
  sketch2,
  sketch3,
  sketch4,
  sketch5,
  sketch6,
  sketch7,
  sketch8,
} from "../../assets";
import SketchLeftSide from "./SketchLeftSide";
import SketchRightSide from "./SketchRightSide";

const Sketches = () => {
  const imagesList = [
    sketch1,
    sketch2,
    sketch3,
    sketch4,
    sketch5,
    sketch6,
    sketch7,
    sketch8,
  ];

  return (
    <section className="bg-white md:pt-20 pt-0 md:pb-16">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-0 overflow-hidden">
        {/* Left Side */}
        <SketchLeftSide
          imagesList={imagesList.splice(0, imagesList.length / 2)}
        />
        {/* Right Side */}
        <SketchRightSide imagesList={imagesList.splice(0)} />
      </div>
    </section>
  );
};

export default Sketches;
