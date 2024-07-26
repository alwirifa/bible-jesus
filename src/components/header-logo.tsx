import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const HeaderLogo = (props: Props) => {
  return (
    <div>
      <Link href={"/"}>
        <div className="items-center flex">
          <Image src={"/images/MaisonLogo.svg"} alt="logo" height={90} width={250} />
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
