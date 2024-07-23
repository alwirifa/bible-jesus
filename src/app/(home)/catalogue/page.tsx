import Header from "@/components/header";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Header />
      <div className="pb-32 bg-neutral-100">
        <div className="px-4 py-2 rounded-md bg-neutral-100 ">catalouge</div>
      </div>
    </div>
  );
};

export default page;
