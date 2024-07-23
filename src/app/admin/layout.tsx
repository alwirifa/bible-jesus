import HeaderAdmin from "@/components/admin/header-admin";
import Sidebar from "@/components/admin/sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full">
      <div className="h-screen w-[20%]  sticky top-0 bg-white">
        <Sidebar />
      </div>
      <div className="flex-1 bg-bgGray">
        <div className="flex flex-col">
          <HeaderAdmin />
          <div className="bg-neutral-100">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
