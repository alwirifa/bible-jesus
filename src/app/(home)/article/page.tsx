import Container from "@/components/container";
import Image from "next/image";
import React from "react";

type Props = {};

const articleData = [
  {
    date: "DECEMBER, 8 2023",
    title: "OPHELIA LAUNCH NEWEST PERFUME AT ODILIA EVENT",
    subtitle:
      "This new perfume features saffron, patchouli, and cedar. It starts with spicy and earthy notes, then blends into warm cedar, and ends with all three scents combined for a rich, lasting aroma.",
    image: "/images/Frame1.svg",
  },
  {
    date: "DECEMBER, 8 2023",
    title: "OPHELIA LAUNCH NEWEST PERFUME AT ODILIA EVENT",
    subtitle:
      "This new perfume features saffron, patchouli, and cedar. It starts with spicy and earthy notes, then blends into warm cedar, and ends with all three scents combined for a rich, lasting aroma.",
    image: "/images/Frame2.svg",
  },
  {
    date: "DECEMBER, 8 2023",
    title: "OPHELIA LAUNCH NEWEST PERFUME AT ODILIA EVENT",
    subtitle:
      "This new perfume features saffron, patchouli, and cedar. It starts with spicy and earthy notes, then blends into warm cedar, and ends with all three scents combined for a rich, lasting aroma.",
    image: "/images/Frame3.svg",
  },
];

const Page: React.FC<Props> = () => {
  return (
    <div className="font-poppins">
      <Container>
        {articleData.map((article, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10">
            <div className="flex lg:w-[550px] xl:w-[650px] 2xl:w-[750px]">
              <div className="relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-[550px] w-full">
                <Image
                  src={article.image}
                  alt={article.image}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 relative">
              <p className="text-lg sm:text-xl md:text-2xl font-[300] mt-4 lg:mt-8">{article.date}</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold mb-2">
                {article.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-[300]">{article.subtitle}</p>
              <div className="flex md:absolute bottom-0 left-0 px-8 sm:px-10 md:px-12 lg:px-16 py-2 sm:py-3 text-white bg-black text-base sm:text-lg md:text-xl font-[400] max-w-max">
                Read More
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Page;
