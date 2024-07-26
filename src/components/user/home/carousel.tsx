import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const perfumeData = [
  {
    label: "antheia",
    img: "/images/products/perfume-antheia.webp",
  },
  {
    label: "freya pathouli",
    img: "/images/products/perfume-freya-patchouli.webp",
  },
  {
    label: "harra vertiver",
    img: "/images/products/perfume-harra-vertiver.webp",
  },
  {
    label: "hybris",
    img: "/images/products/perfume-hybris.webp",
  },
  {
    label: "misool",
    img: "/images/products/perfume-misool.webp",
  },
  {
    label: "papillon",
    img: "/images/products/perfume-papillon.webp",
  },
  {
    label: "rose de mai",
    img: "/images/products/perfume-rose-de-mai.webp",
  },
  {
    label: "kannauj",
    img: "/images/products/perfume-rose-kannauj.webp",
  },
  {
    label: "reverie",
    img: "/images/products/perfume-rose-reverie.webp",
  },
  {
    label: "siren 1987",
    img: "/images/products/perfume-siren-1987.webp",
  },
  {
    label: "the children of medusa",
    img: "/images/products/perfume-the-children-of-medusa.webp",
  },
  {
    label: "vanilla gold",
    img: "/images/products/perfume-vanilla-gold.webp",
  },
];

export function CarouselHome() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {perfumeData.map((perfume, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="text-center">
                    <img
                      src={perfume.img}
                      alt={perfume.label}
                      className="w-auto h-[300px] md:h-[400px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots itemLength={perfumeData.length}/>
    </Carousel>
  );
}
