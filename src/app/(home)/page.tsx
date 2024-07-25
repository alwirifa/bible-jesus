"use client";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { CarouselHome } from "@/components/user/home/carousel";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("1");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div
      className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory scroll-smooth
      overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
    >
      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        id="header"
        // className=" text-black snap-start"
      >
        <Header />
      </section>

     

      <section
        ref={(el) => {
          sectionsRef.current[0] = el;
        }}
        id="header"
        className=" text-black snap-end"
      >
        <Container>
        <div className="flex p-6 h-[500px] ">
          <div className="flex flex-col items-center justify-center w-full relative">
            <img
              src={"/images/home/banner-logo1.webp"}
              alt="logo"
              className="w-[350px] h-auto"
            />
            <div className="absolute bottom-0 left-0 leading-[16px]">
              <p>The Scents of Flower </p>
              <p>And Sweet Memory of Butterflies</p>
            </div>
          </div>
          <div className="flex h-full justify-center items-center  gap-16 w-full">
            <div className="flex flex-col gap-6">
              <img
                src={"/images/home/banner-image1.webp"}
                alt="logo"
                className="w-[150px] h-auto"
              />
              <img
                src={"/images/home/banner-image2.webp"}
                alt="logo"
                className="w-[150px] h-auto"
              />
            </div>
            <CarouselHome/>
            {/* <img
              src={"/images/products/perfume-antheia.webp"}
              alt="logo"
              className="w-auto h-[400px]"
            /> */}
          </div>
        </div>
      </Container>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        id="1"
        className="snap-start mt-16"
      >
        <div className="snap-start h-screen w-full relative overflow-hidden ">
          <video
            src="/videos/video.mp4"
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 h-full w-full object-cover"
          ></video>
          {/* <div className="absolute inset-0 flex items-center justify-center text-center text-black">
            <h1 className="text-3xl font-bold">Hero Section</h1>
          </div> */}
        </div>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        id="2"
        className="snap-start text-black"
      >
        <div className="snap-start h-screen w-full text-black flex flex-col items-center py-6">
          <div className="flex gap-6 h-full w-full items-center">
            <div className="w-[15%] h-[80%] relative text-black">
              <Image
                src={`/images/lb3.jpg`}
                alt="banner image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full h-full relative text-black">
              <Image
                src={`/images/banner1.webp`}
                alt="banner image 1"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center text-black">
                <h1 className="text-2xl font-bold">Banner 1</h1>
              </div>
            </div>
            <div className="w-[15%] h-[80%] relative text-black">
              <Image
                src={`/images/rb3.jpg`}
                alt="banner image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

       
          <div className=" h-auto flex flex-col gap-4 items-center text-center pt-6 px-6">
            <h1 className="text-4xl font-semibold">Maison D&apos; Ophelia</h1>
            <p className="max-w-[34rem]">
              is an Indonesian local perfume brand founded by Zulham Siregar,
              who also the Perfume Creation Director with a career based in
              Paris, France.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        id="3"
        className="snap-start text-black"
      >
        <Container>
          <div className="snap-start h-screen w-full text-black flex items-center">
            <div className="h-full w-full flex items-center">
              <div className="w-[50%] h-[80%] relative text-black">
                <Image
                  src={`/images/banner2.webp`}
                  alt="banner image 2"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center text-black">
                  <h1 className="text-2xl font-bold">Banner 2</h1>
                </div>
              </div>
            </div>
            <div className="h-full w-full flex flex-col gap-4">
              <div className=" relative text-black">
                <Image
                  src={`/images/rb4.jpg`}
                  alt="banner image 2"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 flex items-center justify-center text-center text-black">
                  <h1 className="text-2xl font-bold">Banner 2</h1>
                </div>
              </div>
              <h1 className="text-4xl font-semibold">Follow The Fragnance</h1>
              <p>
                Our perfumes are meticulously crafted using natural raw
                materials sourced both locally and from the finest imports,
                employing traditional production methods from Kannauj, Jaipur,
                and New York—from flower harvesting and distillation to
                blending—all done in the traditional manner.
              </p>
              <div className="bg-black px-4 py-2  text-white max-w-max">
                VIEW OUR COLLECTION
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[4] = el;
        }}
        id="banner4"
        className="snap-start text-black"
      >
        <div className="snap-start h-screen w-full text-black">
          <div className="w-full h-full relative text-black">
            <Image
              src={`/images/banner3.webp`}
              alt="banner image 3"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <Container>
                <div className="flex flex-col gap-6 justify-center items-center">
                  <h1 className="text-2xl max-w-4xl text-center bg-nlue-500 ">
                    Maison d&apos;Ophelia has introduced several fragrance
                    collections including Antheia, Rose de Mai, Medusa, Siren
                    1984, Odilia, and Papillon.
                  </h1>
                  <h1 className="text-2xl max-w-4xl ">
                    Our perfumes are Eau de Extrait and Eau de Parfum, processed
                    with utmost care. We now present a new evolution where our
                    bottles are inspired by morning dew shape.
                  </h1>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>

      <footer
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
        id="footer"
        className="snap-center text-black "
      >
        <Footer />
      </footer>

      {/* {activeSection === "footer" ? (
        <div></div>
      ) : (
        <div>
          <div className={`fixed bottom-1/2 top-1/2 left-0`}>

            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(0)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "0" || activeSection === "header"
                      ? "bg-sky-500"
                      : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(1)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "1" ? "bg-sky-500" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(2)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "2" ? "bg-sky-500" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(3)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "3" ? "bg-sky-500" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(4)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "banner4"
                      ? "bg-sky-500"
                      : "bg-transparent"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
