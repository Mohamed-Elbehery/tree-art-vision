import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "react-loading-skeleton/dist/skeleton.css";

const ArtsContent = ({ title, description, imageSrc, index }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [firstTime, setFirstTime] = useState(true);
  const svgIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );

  useEffect(() => {
    let timer = setInterval(
      () => {
        if (imageIndex >= 1) setImageIndex(() => 0);
        else setImageIndex(() => imageIndex + 1);
        setFirstTime(false);
      },
      firstTime ? 6000 : 3000
    );

    return () => clearInterval(timer);
  }, [imageIndex, firstTime]);

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
      className="max-w-sm relative mx-auto md:mx-0"
    >
      <div>
        <img src={imageSrc[imageIndex]} alt="art-img" />
      </div>
      <div className="relative -top-2 bg-black text-main text-base px-6 py-4 rounded-xl rounded-tr-none rounded-tl-none">
        <h2 className="font-bold text-center">{title}</h2>
        <p className="font-extralight mt-2 md:line-clamp-4 line-clamp-5">
          {description}
        </p>
        <button className="btn-card">Know more {svgIcon}</button>
      </div>
    </motion.div>
  );
};

export default ArtsContent;
