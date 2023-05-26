const SketchesCard = ({ imageSrc }) => {
  return (
    <div className="w-[125%]">
      <img
        className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
        src={imageSrc}
        alt="sketch_1-img"
      />
    </div>
  );
};

export default SketchesCard;
