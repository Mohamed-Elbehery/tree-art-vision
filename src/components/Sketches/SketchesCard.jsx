import { motion } from "framer-motion";

const SketchesCard = ({ direction, imageSrc }) => {
  return (
    <motion.div
      initial={direction === "left" ? { left: "-110%" } : { left: "110%" }}
      whileInView={{
        left: 0,
        transition: { duration: 0.75, type: "tween", delay: 0.1 },
      }}
      viewport={{ once: true }}
      className="w-[125%] relative"
    >
      <img
        className="w-[62.5%] md:w-[60%] h-full aspect-[16/12] mx-auto rounded-xl object-cover hover:filter hover:grayscale transition-all duration-500 ease-in"
        src={imageSrc}
        alt="sketch_1-img"
      />
    </motion.div>
  );
};

export default SketchesCard;
