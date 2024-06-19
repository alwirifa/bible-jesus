import React from "react";
import Container from "@/components/container";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full font-dm_sans">
      <Container>
        <div className="pt-14 md:pt-28 pb-16 md:pb-36 flex flex-col lg:flex-row gap-12 lg:gap-32 px-4 sm:px-10 md:px-20">
          <div className="space-y-8">
            <Image src={"/images/MaisonLogoBlack.svg"} alt="logo-black" height={80} width={180} />
            <p className="text-lg sm:text-xl text-grey">
              The Scents of Flower And Sweet <br /> Memory of Butterflies
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-400">
                icons
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                icons
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                icons
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                icons
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                icons
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10">
            <h3 className="text-xl lg:text-[22px] font-[700]">Navigation</h3>
            <ul className="text-grey text-lg sm:text-xl capitalize space-y-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Article
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 lg:gap-10">
            <h3 className="text-xl lg:text-[22px] font-[700]">Contact us</h3>
            <ul className="text-grey text-lg sm:text-xl capitalize space-y-4">
              <li>
                <a
                  href="mailto:hi@maisondeophelia.com"
                  className="hover:text-gray-400"
                >
                  hi@maisondeophelia.com
                </a>
              </li>
              <li>
                <a href="tel:+6285174150176" className="hover:text-gray-400">
                  +62 851-7415-0176
                </a>
              </li>
              <li>
                <p>Bandung, Indonesia</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-4 sm:px-10 md:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full text-lg sm:text-xl font-[400] text-grey border-t border-white pt-6 lg:pt-6 px-4">
            <p className="text-center lg:text-left">Copyright 2024 Maison D Ophelia</p>
            <div className="flex gap-4 mt-4 lg:mt-0">
              <p> All Rights Reserved | </p>
              <a href="#" className="hover:text-gray-400">
                Terms and Conditions
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
