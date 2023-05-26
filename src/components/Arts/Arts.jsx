import ArtsCard from "./ArtsCard";
import { s11, s12, s21, s22, s23, s31, s32, s33 } from "../../assets";

const Arts = () => {
  const data = [
    {
      title: "Sketches",
      description:
        "Discover our Sketches section that includes various artworks of multiple topics and materials. Our Sketches are drawn using materials that are not capable to be used as decorations so they are not for sale.",

      imageSrc: [s11, s12],
    },
    {
      title: "Decorative Pieces",
      description:
        "Get Your house walls ready before discovering this section as we will Fill Your walls and Life with art and colors with our Decorative Pieces that are designed to decorate your home. if you are interested to buy contact us.",
      imageSrc: [s32, s33],
    },
    {
      title: "Art Workshops",
      description:
        "Interested in our art ? why don't you be an artist yourself ? Join our Workshops now and make you own art and let the artists increase. If you are interested to join our workshops or for any inquiries contact us.",
      imageSrc: [s21, s22],
    },
    {
      title: "Unique Designs",
      description:
        "Interested in our art ? why don't you be an artist yourself ? Join our Workshops now and make you own art and let the artists increase. If you are interested to join our workshops or for any inquiries contact us.",
      imageSrc: [s31, s23],
    },
  ];

  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-light text-center mb-20">
          Our art sections
        </h1>
        {/* art Cards */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6">
          {data ? (
            data.map((item, key) => <ArtsCard key={key} {...item} />)
          ) : (
            <h1 className="text-center">Loading...</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Arts;
