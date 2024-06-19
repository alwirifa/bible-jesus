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
          <div key={index} className=" flex gap-10 mb-10">
            <div className="flex w-[685px] ">
              <div className="relative h-[400px] w-[550px]">
                <Image
                  src={article.image}
                  alt={article.image}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="w-full flex gap-4 flex-col relative">
              <p className="text-2xl font-[300] mt-8">{article.date}</p>
              <h2 className="text-[42px] font-semibold mb-2">
                {article.title}
              </h2>
              <p className="text-xl font-[300]">{article.subtitle}</p>
              <div className="absolute bottom-0 left-0 px-16 py-3 text-white bg-black text-xl font-[400] max-w-max">Read More</div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Page;
