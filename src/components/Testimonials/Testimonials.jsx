import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const data = [
    {
      description:
        "I wasn't interested in art that much, but after seeing these works i had the eager to discover more of this art.",
      clientName: "`Elaria Youssif`",
    },
    {
      description:
        "Their materials and colors quality are awesomne, i also like their details, they take care of their work details so much.",
      clientName: "`Shrook Ehab`",
    },
    {
      description:
        "i Love their interest in art, they nearly know something in every kind of art whatever it is, and they didn't stop at this point either, they still want to know more. WOW!",
      clientName: "`Omar Tamer`",
    },
  ];

  return (
    <section className="bg-white pb-14 overflow-hidden px-4 md:px-0">
      <h1 className="text-center text-5xl">Testimonials</h1>
      <div className="container mx-auto lg:flex lg:items-center lg:justify-center gap-x-14 md:grid md:grid-cols-2 pt-16">
        {data &&
          data.map((item, key) => <TestimonialsCard key={key} {...item} />)}
      </div>
    </section>
  );
};

export default Testimonials;
