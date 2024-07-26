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
          <div className="flex flex-col md:flex-row p-6 md:h-[500px] h-full">
            <div className="flex flex-col items-center justify-center w-full relative">
              <img
                src={"/images/home/banner-logo1.webp"}
                alt="logo"
                className="w-[350px] h-auto"
              />
              <div className="md:absolute mt-6 text-center md:text-left md:mt-0 bottom-0 left-0 leading-[20px]">
                <p>The Scents of Flower </p>
                <p>And Sweet Memory of Butterflies</p>
              </div>
            </div>
            <div className="flex h-full justify-center items-center gap-16 w-full mt-6 md:mt-0">
              <div className="hidden md:flex flex-col gap-6">
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
              <CarouselHome />
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        id="1"
        className="snap-start "
      >
        <div className="snap-start h-screen w-full relative overflow-hidden ">
          <video
            src="/videos/video.mp4"
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 h-full w-full object-cover"
          ></video>
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
            <div className="w-[10%] h-[80%] relative text-black">
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
            </div>
            <div className="w-[10%] h-[80%] relative text-black">
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
          <div className="snap-start h-screen w-full text-black flex gap-16 items-center">
            <div className="h-full w-full md:flex items-center p-16 hidden ">
              <img
                src={"/images/home/banner3-image1.webp"}
                alt="logo"
                className="w-auto h-full"
              />
            </div>
            <div className="h-full w-full flex flex-col   justify-center gap-4 px-6 md:px-0">
              <div className="w-full flex justify-center items-center">
                <img
                  src={"/images/home/banner3-image2.webp"}
                  alt="logo"
                  className=" h-[400px] w-auto"
                />
              </div>
              <h1 className="text-5xl font-semibold mt-6">
                Follow The Fragnance
              </h1>
              <p className="font-medium max-w-md text-justify">
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
        id="4"
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
                  <h1 className="text-base md:text-3xl max-w-5xl text-center bg-nlue-500 leading-loose">
                    Maison d&apos;Ophelia has introduced several fragrance
                    collections including Antheia, Rose de Mai, Medusa, Siren
                    1984, Odilia, and Papillon.
                  </h1>
                  <h1 className="text-base md:text-3xl max-w-5xl leading-loose">
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

      <section
        ref={(el) => {
          sectionsRef.current[5] = el;
        }}
        id="5"
        className="snap-start text-black"
      >
        <div className="snap-start h-screen w-full flex flex-col items-center justify-center gap-16 text-black relative">
          <div className="flex gap-4 md:gap-16 items-center">
            <img
              src={"/images/home/banner3-image2.webp"}
              alt="logo"
              className=" h-[150px] md:h-[400px] w-auto"
            />
            <img
              src={"/images/home/banner3-image3.webp"}
              alt="logo"
              className="h-[200px] md:h-[500px] w-auto"
            />
            <img
              src={"/images/home/banner3-image4.webp"}
              alt="logo"
              className=" h-[150px] md:h-[400px] w-auto"
            />
          </div>
          <Container>
            <div className="flex flex-col gap-6 text-center px-6 md:px-0 ">
              <p>
                From the fragrance compositions to the bottle designs, Maison
                dOphelia continually strives to introduce innovative creations.
                We firmly believe that attention to detail makes all the
                difference. With our meticulously crafted collection, you not
                only receive an unforgettable scent but also a unique piece of
                art.
              </p>
              <p>
                Each of our perfume bottles showcases stunning cap design hand
                crafted in collaboration with local Indonesian artisans to
                represent each aroma and series.
              </p>
            </div>
          </Container>
          <div className="bg-white text-center w-full p-6 absolute bottom-0">
            <h1 className="text-2xl">Reimagining the evolution .</h1>
          </div>
        </div>
      </section>

      <footer
        ref={(el) => {
          sectionsRef.current[6] = el;
        }}
        id="footer"
        className="snap-center text-black "
      >
        <Footer />
      </footer>

      {activeSection === "footer" ? (
        <div></div>
      ) : (
        <div>
          <p>current section: {activeSection}</p>
          <div className={`fixed bottom-1/2 top-1/2 left-0`}>
            <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
              <button
                className={`w-4 h-4 rounded-full border-2 border-neutral-400 flex justify-center items-center`}
                onClick={() => scrollToSection(0)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "0" || activeSection === "header"
                      ? "bg-neutral-400"
                      : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2  border-neutral-400  flex justify-center items-center`}
                onClick={() => scrollToSection(1)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "1" ? "bg-neutral-400" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 border-neutral-400 flex justify-center items-center`}
                onClick={() => scrollToSection(2)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "2" ? "bg-neutral-400" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 border-neutral-400 flex justify-center items-center`}
                onClick={() => scrollToSection(3)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "3" ? "bg-neutral-400" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 border-neutral-400 flex justify-center items-center`}
                onClick={() => scrollToSection(4)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "4" ? "bg-neutral-400" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 border-neutral-400 flex justify-center items-center`}
                onClick={() => scrollToSection(5)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "5" ? "bg-neutral-400" : "bg-transparent"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
