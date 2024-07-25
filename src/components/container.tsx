import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
};

export default Container;
