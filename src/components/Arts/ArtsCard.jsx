import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ArtsContent = ({ title, description, imageSrc }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      if (imageIndex >= 1) setImageIndex(() => 0);
      else setImageIndex(() => imageIndex + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [imageIndex]);

  return (
    <div>
      <div>
        <img src={imageSrc[imageIndex]} alt="art-img" loading="lazy" />
      </div>
      <div className="relative -top-2 bg-black text-main text-base px-6 py-4 rounded-xl rounded-tr-none rounded-tl-none">
        <h2 className="font-bold text-center">{title || <Skeleton />}</h2>
        <p className="font-extralight mt-2 md:line-clamp-4 line-clamp-5">
          {description || <Skeleton />}
        </p>
        <button className="btn-card">
          Know more{" "}
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
        </button>
      </div>
    </div>
  );
};

export default ArtsContent;
