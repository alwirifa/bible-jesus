"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
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
        className=" text-black snap-start"
      >
        <Header />
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[1] = el;
        }}
        id="1"
        className="snap-start text-black"
      >
        <div className="snap-start h-screen w-full relative overflow-hidden text-black">
          <video
            src="/videos/video.mp4"
            loop
            autoPlay
            muted
            className="absolute top-0 left-0 h-full w-full object-cover"
          ></video>
          <div className="absolute inset-0 flex items-center justify-center text-center text-black">
            <h1 className="text-3xl font-bold">Hero Section</h1>
          </div>
        </div>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[2] = el;
        }}
        id="2"
        className="snap-start text-black"
      >
        <div className="snap-start h-screen w-full text-black">
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
        </div>
      </section>

      <section
        ref={(el) => {
          sectionsRef.current[3] = el;
        }}
        id="3"
        className="snap-start text-black"
      >
        <div className="snap-start h-screen w-full text-black">
          <div className="w-full h-full relative text-black">
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
            <div className="absolute inset-0 flex items-center justify-center text-center text-black">
              <h1 className="text-2xl font-bold">Banner 3</h1>
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

      {activeSection === "footer" ? (
        <div></div>
      ) : (
        <div>
          <div className={`fixed bottom-1/2 top-1/2 left-0`}>
            {/* <p>Current Section: {activeSection}</p> */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(1)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "1" || activeSection === "header" ? "bg-white" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(2)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "2" ? "bg-white" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(3)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "3" ? "bg-white" : "bg-transparent"
                  }`}
                ></div>
              </button>
              <button
                className={`w-4 h-4 rounded-full border-2 flex justify-center items-center`}
                onClick={() => scrollToSection(4)}
              >
                <div
                  className={` h-2 w-2 rounded-full  ${
                    activeSection === "banner4" ? "bg-white" : "bg-transparent"
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
