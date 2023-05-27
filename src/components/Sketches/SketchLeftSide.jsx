import SketchesCard from "./SketchesCard";

const SketchLeftSide = ({ imagesList }) => {
  return (
    <div className="lg:ml-40 flex flex-col items-center gap-10">
      <div className="lg:px-16 px-0 pb-16 pt-6 text-center md:text-left">
        <h1 className="text-5xl mt-20 font-normal text-center">Sketches</h1>
        <p className="text-[0.865rem] font-light px-8 lg:text-left text-center mt-12">
          “It took me four years to paint like Raphael, but a lifetime to paint
          like a child.” – Pablo Picasso
        </p>
      </div>
      {imagesList.map((item, key) => (
        <SketchesCard direction={"left"} key={key} imageSrc={item} />
      ))}
    </div>
  );
};

export default SketchLeftSide;
