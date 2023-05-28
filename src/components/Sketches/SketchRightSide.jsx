import { Link } from "react-router-dom";
import SketchesCard from "./SketchesCard";
import useHandleNavigation from "../../hooks/useHandleNavigation";

const SketchRightSide = ({ imagesList }) => {
  const { handleClick } = useHandleNavigation();

  return (
    <div className="lg:mr-40 md:mt-48 mt-12 flex flex-col items-center gap-12 pb-12">
      {imagesList.map((item, key) => (
        <SketchesCard direction={"right"} key={key} imageSrc={item} />
      ))}
      <Link
        className={`btn before:right-48`}
        onClick={handleClick}
        to={"/sketches"}
      >
        More Sketches
      </Link>
    </div>
  );
};

export default SketchRightSide;
