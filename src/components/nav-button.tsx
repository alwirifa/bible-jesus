"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavButton = ({ href, label, isActive }: Props) => {
  return (
    <div
      className={cn(
        "text-[16px] font-poppins font-medium w-full px-4 py-2 hover:underline hover:underline-offset-[6px] hover:decoration-1 border-noneoutline-none transition uppercase",
        isActive
          ? "underline font-[600] underline-offset-[6px] decoration-1"
          : ""
      )}
    >
      <Link href={href}>{label}</Link>
    </div>
  );
};

export default NavButton;
