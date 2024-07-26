import Link from "next/link";
import React from "react";

function CatalogueHome() {
  const perfumeData = [
    {
      label: "antheia",
      img: "/images/catalog/Frame 1 (1).webp",
    },
    {
      label: "freya pathouli",
      img: "/images/catalog/Frame 1 (2).webp",
    },
    {
      label: "harra vertiver",
      img: "/images/catalog/Frame 1 (3).webp",
    },
    {
      label: "hybris",
      img: "/images/catalog/Frame 1 (4).webp",
    },
    {
      label: "misool",
      img: "/images/catalog/Frame 1 (5).webp",
    },
    {
      label: "papillon",
      img: "/images/catalog/Frame 1 (6).webp",
    },
    {
      label: "rose de mai",
      img: "/images/catalog/Frame 1 (7).webp",
    },
    {
      label: "kannauj",
      img: "/images/catalog/Frame 1 (8).webp",
    },
    {
      label: "reverie",
      img: "/images/catalog/Frame 1 (9).webp",
    },
    {
      label: "siren 1987",
      img: "/images/catalog/Frame 1 (10).webp",
    },
    {
      label: "the children of medusa",
      img: "/images/catalog/Frame 1 (11).webp",
    },
    {
      label: "vanilla gold",
      img: "/images/catalog/Frame 1 (12).webp",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center p-6">
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-16">
        {perfumeData.map((perfume, index) => (
          <Link href={"/catalogue/1"} className="text-center cursor-pointer" key={index}>
            <img
              src={perfume.img}
              alt={perfume.label}
              className="w-auto h-[200px] md:h-[400px] rounded-t-full"
            />
            <span>{perfume.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatalogueHome;
