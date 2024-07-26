import React from "react";
import Navigation from "@/components/navigation";
import HeaderLogo from "@/components/header-logo";
import { Loader2 } from "lucide-react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="font-poppins p-1 pt-4 lg:px-14 border-b border-black  w-full z-50 bg-white shadow-sm">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-2 md:gap-4 items-center">
          <HeaderLogo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
