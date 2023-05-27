import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section className="text-main flex-col items-center justify-center">
      <div className="landing-content md:pt-52 pt-40">
        <motion.h1
          animate={{ opacity: 1, transition: { duration: 2.25 } }}
          className="text-5xl md:text-7xl opacity-0"
        >
          Art for your class
        </motion.h1>
        <motion.button
          animate={{ opacity: 1, transition: { duration: 2.25 } }}
          className="btn opacity-0"
        >
          Discover
        </motion.button>
      </div>
    </section>
  );
};

export default Landing;
