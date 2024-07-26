import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const perfumeData = [
  {
    date: "DECEMBER, 8 2023",
    title: "OPHELIA LAUNCH NEWEST PERFUME AT ODILIA EVENT",
    subtitle:
      "This new perfume features saffron, patchouli, and cedar. It starts with spicy and earthy notes, then blends into warm cedar, and ends with all three scents combined for a rich, lasting aroma.",
    image: "/images/Frame1.svg",
    id: "1",
  },
  {
    date: "DECEMBER, 8 2023",
    title: "OPHELIA LAUNCH NEWEST PERFUME AT ODILIA EVENT",
    subtitle:
      "This new perfume features saffron, patchouli, and cedar. It starts with spicy and earthy notes, then blends into warm cedar, and ends with all three scents combined for a rich, lasting aroma.",
    image: "/images/Frame2.svg",
    id: "2",
  },
  {
    date: "DECEMBER, 8 2023",
    title: "OPHELIA LAUNCH NEWEST PERFUME AT ODILIA EVENT",
    subtitle:
      "This new perfume features saffron, patchouli, and cedar. It starts with spicy and earthy notes, then blends into warm cedar, and ends with all three scents combined for a rich, lasting aroma.",
    image: "/images/Frame3.svg",
    id: "3",
  },
];

function page({ params }: { params: { id: string } }) {
  const perfume = perfumeData.find((item) => item.id === params.id);

  if (!perfume) {
    return (
      <div>
        <Header />
        <Container>
          <div className="flex gap-16 py-16">
            <h1 className="text-3xl font-bold">Perfume not found</h1>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-col w-full p-6 ">
          <img src={perfume.image} className="w-full h-[300px] object-cover" />

          <div className="flex flex-col gap-4 mt-6 justify-center items-center">
            <h1 className="text-xl md:text-2xl font-bold text-center uppercase">
              {perfume.title}
            </h1>
            <h1 className="text-lg md:text-xl">{perfume.date}</h1>
            <h1 className="text-base mt-6 text-justify">{perfume.subtitle}</h1>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default page;
