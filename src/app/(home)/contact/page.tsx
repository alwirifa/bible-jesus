import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="h-full">
        <Container>
          <div className="flex">
            <div className="w-full py-16 px-6 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">
                Were Here to Help You Find Your Perfect Scent
              </h1>
              <p>
                At Maison dOphelia, every fragrance tells a story, and we
                believe in creating a personal connection with each of our
                customers. Whether you have questions about our exquisite
                perfumes, need assistance with an order, or simply want to share
                your experience with us, we are here to assist you.
              </p>
              <p className="text-xl font-semibold">Send Us a Message</p>
            <form>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </form>
              <button className="px-6 py-2 bg-black text-white">SEND</button>
            </div>
            <div>
              <img src={"/images/contact.jpg"} className="h-full w-full" />
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default page;
