import { motion } from "framer-motion";

const Landing = ({ artRef }) => {
  return (
    <section className="text-main flex-col items-center justify-center">
      <div className="landing-content">
        <motion.h1
          animate={{ opacity: 1, transition: { duration: 2.25 } }}
          className="text-4xl md:text-6xl opacity-0"
        >
          Art for your class
        </motion.h1>
        <motion.button
          animate={{ opacity: 1, transition: { duration: 2.25 } }}
          onClick={() => artRef?.current.scrollIntoView({ behavior: "smooth" })}
          className="btn opacity-0"
        >
          Discover
        </motion.button>
      </div>
    </section>
  );
};

export default Landing;
