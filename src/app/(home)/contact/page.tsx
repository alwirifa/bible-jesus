import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="h-full bg-white">
        
          <div className="flex md:flex-row flex-col-reverse">
            <div className="w-full py-16 px-6 flex flex-col gap-4">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Were Here to Help You Find Your Perfect Scent
              </h1>
              <p>
                At Maison dOphelia, every fragrance tells a story, and we
                believe in creating a personal connection with each of our
                customers. Whether you have questions about our exquisite
                perfumes, need assistance with an order, or simply want to share
                your experience with us, we are here to assist you.
              </p>
              <p className="text-lg md:text-xl font-semibold">Send Us a Message</p>
            <form className="flex flex-col gap-4">
              <div className="flex md:flex-row flex-col gap-4">

              <input type="text" className="border-2 border-black py-4 px-3 w-full" placeholder="Name" />
              <input type="text" className="border-2 border-black py-4 px-3 w-full" placeholder="Email" />
              </div>
              <textarea rows={4} className="border-2 border-black w-full py-4 px-3" placeholder="Messages" />
            </form>
            <div className="md:max-w-max w-full">

              <button className="px-10 py-3 w-full bg-black text-white">SEND</button>
            </div>
            </div>
            <div className="w-full h-full ">
              <img src={"/images/contact.jpg"} className="h-full w-full object-cover max-h-[300px] md:max-h-[700px]" />
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
