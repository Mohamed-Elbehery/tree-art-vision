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

const Sketches = () => {
  return (
    <section className="bg-white md:pt-28 pt-0 md:pb-16">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-0 overflow-hidden">
        {/* Left Side */}
        <div className="md:ml-40 flex flex-col items-center gap-12">
          <div className="md:px-16 px-0 pb-16 pt-6 text-center md:text-left">
            <h1 className="text-5xl mt-20 font-normal text-center">Sketches</h1>
            <p className="text-[0.865rem] font-light px-8 mt-12">
              “It took me four years to paint like Raphael, but a lifetime to
              paint like a child.” – Pablo Picasso
            </p>
          </div>
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch1}
              alt="sketch_1-img"
            />
          </div>
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch2}
              alt="sketch_2-img"
            />
          </div>
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch3}
              alt="sketch_3-img"
            />
          </div>
          <div className="w-[125%]">
            <img
              className="mb-14 w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch4}
              alt="sketch_4-img"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="md:mr-40 md:mt-40 mt-12 flex flex-col items-center gap-12 pb-12">
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch5}
              alt="sketch_5-img"
            />
          </div>
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch6}
              alt="sketch_6-img"
            />
          </div>
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch7}
              alt="sketch_7-img"
            />
          </div>
          <div className="w-[125%]">
            <img
              className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
              src={sketch8}
              alt="sketch_8-img"
            />
          </div>
          <button className="btn before:right-48">More Sketches</button>
        </div>
      </div>
    </section>
  );
};

export default Sketches;
