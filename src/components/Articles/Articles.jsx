import {
  article_pexels_1,
  article_pexels_2,
  article_pexels_3,
} from "../../assets";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  const data = [
    {
      title: "History of Art",
      imageSrc: article_pexels_1,
    },
    {
      title: "Color Types",
      imageSrc: article_pexels_2,
    },
    {
      title: "Color Theory",
      imageSrc: article_pexels_3,
    },
  ];

  return (
    <section className="bg-white pb-14 overflow-hidden px-6 md:px-0">
      <h1 className="text-center text-5xl pb-12 pt-4">Art Articles</h1>
      <div className="container mx-auto lg:flex lg:items-center lg:justify-center gap-5 md:grid md:grid-cols-2">
        {data &&
          data.map((item, key) => (
            <ArticlesCard index={key} key={key} {...item} />
          ))}
      </div>
    </section>
  );
};

export default Articles;
