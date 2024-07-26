import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <div>
      <Link href={"/"}>
        <div className="items-center flex">
          <img src={"/images/MaisonLogo.svg"} alt="logo" className="h-12 md:h-16 w-auto" />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
