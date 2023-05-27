import { motion } from "framer-motion";

const TestimonialsCard = ({ description, clientName, index }) => {
  const svgIcon = (
    <svg
      className="ml-6 mb-4"
      fill="#d8b454"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0, left: 100, transition: { duration: 0 } }}
      whileInView={{
        opacity: 1,
        left: 0,
        transition: {
          duration: 1.1,
          delay: 0.4 * index,
          type: "tween",
        },
      }}
      className="testimonials-card relative"
    >
      <div className="testimonials-body">
        {svgIcon}
        <p className="leading-[1.35rem] px-4 line-clamp-3">{description}</p>
        <h3 className="text-lg text-right font-extralight mr-4">
          {clientName}
        </h3>
      </div>
    </motion.div>
  );
};

export default TestimonialsCard;
