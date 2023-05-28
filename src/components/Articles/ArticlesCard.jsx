import { motion } from "framer-motion";

const ArticlesCard = ({ title, imageSrc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, left: 100 }}
      whileInView={{
        opacity: 1,
        left: 0,
        transition: {
          duration: 1.1,
          delay: 0.4 * index,
          type: "tween",
        },
      }}
      viewport={{ once: true }}
      className="max-w-xs relative lg:mx-0 mx-auto lg:mt-0 mt-6"
    >
      {/* Image */}
      <img
        className="w-full aspect-[15/16] object-cover rounded-xl"
        src={imageSrc}
        alt="pexel-img"
      />
      <div className="absolute py-4 left-0 bottom-0 bg-black bg-opacity-60 w-full text-center space-y-3 rounded-xl rounded-tr-3xl rounded-tl-3xl">
        <h3 className="text-secondary text-lg">{title}</h3>
        <button className="btn before:right-48">Read Article</button>
      </div>
    </motion.div>
  );
};

export default ArticlesCard;
