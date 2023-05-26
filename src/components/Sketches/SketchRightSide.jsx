import SketchesCard from "./SketchesCard";

const SketchRightSide = ({ imagesList }) => {
  return (
    <div className="lg:mr-40 md:mt-48 mt-12 flex flex-col items-center gap-12 pb-12">
      {imagesList.map((item, key) => (
        <SketchesCard key={key} imageSrc={item} />
      ))}
      <button className="btn before:right-48">More Sketches</button>
    </div>
  );
};

export default SketchRightSide;
