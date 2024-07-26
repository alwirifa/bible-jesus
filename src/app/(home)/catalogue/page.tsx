import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CatalogueHome from "@/components/user/catalogue/catalogue";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <Container>
        <div className="text-base md:text-2xl font-bold w-full text-center p-6">
          <h1 >DISCOVER THE FRAGRANCE</h1>
        </div>
        <CatalogueHome />
      </Container>
      <Footer />
    </div>
  );
};

export default page;
