import Link from "next/link";
import React from "react";

function CatalogueHome() {
  const perfumeData = [
    {
      label: "antheia",
      img: "/images/catalog/Frame 1 (1).webp",
      id: "1",
      type: "artisan series",
      price: "2650",
    },
    {
      label: "freya pathouli",
      img: "/images/catalog/Frame 1 (2).webp",
      id: "2",
      type: "artisan series",
      price: "3650",
    },
    {
      label: "harra vertiver",
      img: "/images/catalog/Frame 1 (3).webp",
      id: "3",
      type: "artisan series",
      price: "3250",
    },
    {
      label: "hybris",
      img: "/images/catalog/Frame 1 (4).webp",

      id: "4",
      type: "artisan series",
      price: "5350",
    },
    {
      label: "misool",
      img: "/images/catalog/Frame 1 (5).webp",
      id: "5",
      type: "essential series",
      price: "750",
    },
    {
      label: "papillon",
      img: "/images/catalog/Frame 1 (6).webp",
      id: "6",
      type: "artisan series",
      price: "1850",
    },
    {
      label: "rose de mai",
      img: "/images/catalog/Frame 1 (12).webp",
      id: "7",
      type: "essential series",
      price: "1450",
    },
    {
      label: "rose kannauj",
      img: "/images/catalog/Frame 1 (8).webp",
      id: "8",
      type: "artisan series",
      price: "2250",
    },
    {
      label: "reverie",
      img: "/images/catalog/Frame 1 (7).webp",
      id: "9",
      type: "special series",
      price: "9450",
    },
    {
      label: "siren 1987",
      img: "/images/catalog/Frame 1 (10).webp",
      id: "10",
      type: "artisan series",
      price: "8335",
    },
    {
      label: "the children of medusa",
      img: "/images/catalog/Frame 1 (9).webp",
      id: "11",
      type: "collaborator series",
      price: "5650",
    },
    {
      label: "vanilla gold",
      img: "/images/catalog/Frame 1 (11).webp",
      id: "12",
      type: "artisan series",
      price: "2350",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center p-6">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
        {perfumeData.map((perfume, index) => (
          <Link
            href={`/catalogue/${perfume.id}`}
            className="text-center cursor-pointer flex flex-row items-center md:flex-col gap-4 md:gap-2 "
            key={index}
          >
            <img
              src={perfume.img}
              alt={perfume.label}
              className="w-auto h-[200px] md:h-[400px] md:rounded-t-full"
            />
            <div className="flex flex-col gap-2 md:gap-0 my-4 uppercase justify-start md:justify-center items-start md:items-center">
              <span className="text-[12px] md:text-base">{perfume.type}</span>
              <span className="font-bold text-base md:text-lg text-start md:text-center">{perfume.label}</span>
              <span className="flex md:hidden font-bold text-base md:text-lg">IDR {perfume.price}K</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatalogueHome;
