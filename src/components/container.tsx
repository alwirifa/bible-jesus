import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className=" px-4 py-8 lg:px-6 w-full">
      <div className=" mx-auto w-full">{children}</div>
    </div>
  );
};

export default Container;
