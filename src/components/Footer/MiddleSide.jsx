import { facebook, instagram } from "../../assets";

const MiddleSide = () => {
  return (
    <div className="mt-8 px-12 md:w-[50%] lg:w-[33%] md:px-0">
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
  );
};

export default MiddleSide;
